/* LSE Study Hub — core helpers. No framework, no build. */
(function (H) {
  "use strict";
  H.courses = H.courses || {};

  /* ---------- storage ---------- */
  var NS = "lsehub:";
  H.get = function (k, def) { try { var v = localStorage.getItem(NS + k); return v == null ? def : JSON.parse(v); } catch (e) { return def; } };
  H.set = function (k, v) { try { localStorage.setItem(NS + k, JSON.stringify(v)); } catch (e) {} };

  /* ---------- misc ---------- */
  H.esc = function (s) { return (s == null ? "" : "" + s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  H.qs = function (name) { return new URLSearchParams(location.search).get(name); };
  H.course = function (c) { return H.courses[c]; };
  H.week = function (c, n) { var co = H.courses[c]; return co && co.weeks.filter(function (w) { return w.n == n; })[0]; };
  H.today = function () { return new Date().toISOString().slice(0, 10); };
  H.applyAccent = function (c, week) {
    var co = H.courses[c]; if (!co) return;
    // palette can live on the course, and be overridden per-week (follow that lecture)
    var pal = Object.assign({}, co.palette || { accent: co.accent }, (week && H.week(c, week) && H.week(c, week).palette) || {});
    var root = document.documentElement.style;
    var acc = pal.accent || co.accent; if (acc) { root.setProperty("--accent", acc); root.setProperty("--accent-soft", acc + "18"); }
    if (pal.def) { root.setProperty("--def", pal.def); root.setProperty("--def-soft", pal.def + "1E"); }
  };

  /* ---------- progress (per course / week / exercise) ---------- */
  // shape: progress[course] = { w1:{done:bool, ex:{ "4a":true }}, ... }
  H.progress = function (c) { var p = H.get("progress:" + c, {}); return p; };
  H.saveProgress = function (c, p) { H.set("progress:" + c, p); };
  H.weekDone = function (c, n) { var p = H.progress(c); return !!(p["w" + n] && p["w" + n].done); };
  H.setWeekDone = function (c, n, v) { var p = H.progress(c); (p["w" + n] = p["w" + n] || {}).done = v; H.saveProgress(c, p); };
  H.exDone = function (c, n, id) { var p = H.progress(c); return !!(p["w" + n] && p["w" + n].ex && p["w" + n].ex[id]); };
  H.setExDone = function (c, n, id, v) { var p = H.progress(c); var w = (p["w" + n] = p["w" + n] || {}); (w.ex = w.ex || {})[id] = v; H.saveProgress(c, p); };

  // course-level exercise progress across all weeks (uses "assigned" lists)
  H.courseExStats = function (c) {
    var co = H.courses[c], done = 0, total = 0;
    co.weeks.forEach(function (w) {
      var a = (w.exercises && w.exercises.assigned) || [];
      total += a.length;
      a.forEach(function (id) { if (H.exDone(c, w.n, id)) done++; });
    });
    return { done: done, total: total };
  };

  /* ---------- autosaving text fields ----------
     Give a <textarea data-save="key"> and it persists + shows a "saved" hint. */
  H.wireAutosave = function (root) {
    (root || document).querySelectorAll("textarea[data-save],input[data-save]").forEach(function (el) {
      var k = el.getAttribute("data-save");
      var saved = H.get("text:" + k, "");
      if (saved) el.value = saved;
      var hint = el.parentNode.querySelector(".savehint");
      var t;
      el.addEventListener("input", function () {
        clearTimeout(t);
        t = setTimeout(function () {
          H.set("text:" + k, el.value);
          if (hint) { hint.textContent = "saved ✓"; hint.classList.add("saved"); setTimeout(function () { hint.classList.remove("saved"); hint.textContent = "saves automatically"; }, 1200); }
        }, 350);
      });
    });
  };

  /* ---------- list fields (questions to ask / AI log) ----------
     stored as arrays of {text, time, done?} under list:<key> */
  H.list = function (k) { return H.get("list:" + k, []); };
  H.listAdd = function (k, obj) { var a = H.list(k); a.unshift(Object.assign({ time: new Date().toLocaleString() }, obj)); H.set("list:" + k, a); return a; };
  H.listSet = function (k, a) { H.set("list:" + k, a); };

  /* ============================================================
     错题本 CARDS + SRS  (shared by collector.js and review.html)
     card = { id, course, week, type, tags[], front, back, feynman,
              ease, interval, reps, due(YYYY-MM-DD), created }
     type ∈ "confuse" | "mistake" | "keypoint"
     ============================================================ */
  H.cards = function () { return H.get("cards", []); };
  H.saveCards = function (a) { H.set("cards", a); };
  H.addCard = function (card) {
    var a = H.cards();
    card.id = card.id || ("c" + Date.now() + Math.floor(Math.random() * 1e4));
    card.created = card.created || H.today();
    card.ease = 2.3; card.interval = 0; card.reps = 0; card.due = H.today();
    card.tags = card.tags || [];
    a.unshift(card);
    H.saveCards(a);
    return card;
  };
  H.updateCard = function (id, patch) { var a = H.cards(); a.forEach(function (c) { if (c.id === id) Object.assign(c, patch); }); H.saveCards(a); };
  H.deleteCard = function (id) { H.saveCards(H.cards().filter(function (c) { return c.id !== id; })); };
  H.cardsDue = function () { var t = H.today(); return H.cards().filter(function (c) { return (c.due || t) <= t; }); };

  // SM-2 lite. grade ∈ "again" | "hard" | "good" | "easy"
  H.schedule = function (id, grade) {
    var a = H.cards(), c = null;
    a.forEach(function (x) { if (x.id === id) c = x; });
    if (!c) return;
    var iv = c.interval || 0, ease = c.ease || 2.3, reps = c.reps || 0;
    if (grade === "again") { iv = 0; ease = Math.max(1.3, ease - 0.2); reps = 0; }
    else if (grade === "hard") { iv = Math.max(1, Math.round((iv || 1) * 1.2)); ease = Math.max(1.3, ease - 0.15); reps++; }
    else if (grade === "good") { iv = reps === 0 ? 1 : reps === 1 ? 3 : Math.round(iv * ease); reps++; }
    else if (grade === "easy") { iv = reps === 0 ? 2 : Math.round((iv || 1) * ease * 1.3); ease += 0.15; reps++; }
    var d = new Date(); d.setDate(d.getDate() + iv);
    Object.assign(c, { interval: iv, ease: +ease.toFixed(2), reps: reps, due: d.toISOString().slice(0, 10), lastGrade: grade });
    H.saveCards(a);
    return c;
  };

  /* ---------- shared top bar ---------- */
  H.topbar = function (active) {
    var items = [["index.html", "Hub"], ["review.html", "错题本 Review"]];
    var due = H.cardsDue().length;
    var links = items.map(function (it) {
      var label = it[1];
      if (it[0] === "review.html" && due) label += ' <span class="badge accent" style="padding:0 6px">' + due + "</span>";
      return '<a href="' + it[0] + '"' + (active === it[0] ? ' class="here"' : "") + ">" + label + "</a>";
    }).join("");
    return '<div class="topbar"><div class="wrap row"><a class="brand" href="index.html"><span class="mk"></span>LSE Study Hub</a><nav class="topnav">' + links + "</nav></div></div>";
  };

  /* ---------- ε-band motif ---------- */
  H.bandSVG = function (opts) {
    opts = opts || {};
    var color = opts.color || "#ffffff", op = opts.opacity == null ? 0.5 : opts.opacity;
    var W = 820, Ht = 200, L = Ht * 0.5, eps = Ht * 0.135, Tx = W * 0.46;
    var d = "M";
    for (var x = 18; x <= W - 14; x += 5) {
      var p = (x - 18) / (W - 32);
      var y = L - Math.sin(p * 12.5) * eps * 2.9 * Math.exp(-3.1 * p);
      d += (x === 18 ? "" : "L") + x.toFixed(0) + "," + y.toFixed(1) + " ";
    }
    return '<svg class="band" viewBox="0 0 ' + W + ' ' + Ht + '" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style="opacity:' + op + '">'
      + '<rect x="' + Tx + '" y="' + (L - eps) + '" width="' + (W - Tx) + '" height="' + (2 * eps) + '" fill="' + color + '" opacity="0.14"/>'
      + '<line x1="0" y1="' + (L - eps) + '" x2="' + W + '" y2="' + (L - eps) + '" stroke="' + color + '" stroke-width="1" opacity="0.4"/>'
      + '<line x1="0" y1="' + (L + eps) + '" x2="' + W + '" y2="' + (L + eps) + '" stroke="' + color + '" stroke-width="1" opacity="0.4"/>'
      + '<line x1="0" y1="' + L + '" x2="' + W + '" y2="' + L + '" stroke="' + color + '" stroke-width="1.4" stroke-dasharray="7 6" opacity="0.7"/>'
      + '<line x1="' + Tx + '" y1="18" x2="' + Tx + '" y2="' + (Ht - 14) + '" stroke="' + color + '" stroke-width="1.2" stroke-dasharray="4 6" opacity="0.55"/>'
      + '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" opacity="0.92"/>'
      + "</svg>";
  };

})(window.LSEHUB = window.LSEHUB || {});
