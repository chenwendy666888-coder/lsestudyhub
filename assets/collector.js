/* Floating 错题本 collector. Requires hub.js loaded first.
   Page sets: <body data-course="ma221" data-week="1" data-src="Limits lecture"> */
(function () {
  "use strict";
  if (window.__lsehubCollector) return; window.__lsehubCollector = true;
  var H = window.LSEHUB; if (!H) return;
  var b = document.body;
  var course = b.getAttribute("data-course") || "";
  var week = b.getAttribute("data-week") || "";
  var src = b.getAttribute("data-src") || document.title;

  var css = ''
    + '.lc-fab{position:fixed;right:16px;bottom:16px;z-index:9999;background:var(--accent,#3B37B5);color:#fff;border:none;border-radius:26px;padding:12px 17px;font:600 14px var(--sans);box-shadow:0 8px 24px rgba(24,26,55,.28);cursor:pointer;display:flex;align-items:center;gap:7px}'
    + '.lc-fab .n{background:rgba(255,255,255,.28);border-radius:99px;padding:0 8px;font-size:12px}'
    + '.lc-mask{position:fixed;inset:0;background:rgba(20,20,40,.4);z-index:10000;display:none}'
    + '.lc-panel{position:fixed;right:16px;bottom:74px;width:min(380px,94vw);max-height:78vh;overflow:auto;background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 20px 60px rgba(24,26,55,.28);z-index:10001;display:none;padding:16px 18px}'
    + '.lc-panel h4{margin:0 0 3px;font:600 16px var(--display);color:var(--indigo-deep)}'
    + '.lc-panel .s{font-size:12px;color:var(--muted);margin-bottom:11px}'
    + '.lc-seg{display:flex;gap:6px;margin-bottom:9px}'
    + '.lc-seg button{flex:1;border:1.5px solid var(--line);background:#fff;border-radius:9px;padding:7px 4px;font:600 12.5px var(--sans);color:var(--muted);cursor:pointer}'
    + '.lc-seg button.on{border-color:var(--accent);color:var(--accent);background:var(--accent-soft)}'
    + '.lc-panel label{font-size:12px;font-weight:600;color:var(--muted);display:block;margin:8px 0 3px}'
    + '.lc-panel textarea,.lc-panel input{width:100%;border:1.5px solid var(--line);border-radius:9px;padding:8px 10px;font:14px/1.5 var(--sans);resize:vertical}'
    + '.lc-panel textarea:focus,.lc-panel input:focus{outline:none;border-color:var(--accent)}'
    + '.lc-row{display:flex;gap:8px;margin-top:12px}'
    + '.lc-btn{border:none;border-radius:9px;padding:9px 14px;font:600 13px var(--sans);cursor:pointer;color:#fff;background:var(--accent,#3B37B5)}'
    + '.lc-btn.mut{background:#fff;color:var(--muted);border:1.5px solid var(--line)}'
    + '.lc-ok{font-size:12.5px;color:var(--ok);margin-top:9px;display:none}'
    + '.lc-recent{margin-top:12px;border-top:1px solid var(--line);padding-top:9px;font-size:12.5px;color:var(--muted)}'
    + '.lc-recent a{font-weight:600}';
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var fab = document.createElement("button"); fab.className = "lc-fab";
  var mask = document.createElement("div"); mask.className = "lc-mask";
  var panel = document.createElement("div"); panel.className = "lc-panel";
  document.body.appendChild(fab); document.body.appendChild(mask); document.body.appendChild(panel);

  var type = "confuse";
  var TYPES = [["confuse", "🙋 没懂"], ["mistake", "✗ 错题"], ["keypoint", "⭐ 必背"]];

  function count() {
    var here = H.cards().filter(function (c) { return c.course === course && String(c.week) === String(week); }).length;
    fab.innerHTML = '🙋 我没懂 / 记一笔' + (here ? '<span class="n">' + here + "</span>" : "");
  }
  function render() {
    panel.innerHTML = ''
      + '<h4>记进错题本</h4>'
      + '<div class="s">' + H.esc(src) + (week ? '　·　Week ' + H.esc(week) : '') + '　·　只存在你自己的浏览器</div>'
      + '<div class="lc-seg">' + TYPES.map(function (t) { return '<button data-t="' + t[0] + '"' + (t[0] === type ? ' class="on"' : "") + '>' + t[1] + "</button>"; }).join("") + "</div>"
      + '<label>问题 / 卡点 (front)</label><textarea id="lcFront" rows="2" placeholder="例：为什么 f→0 还不能保证 1/f→+∞？"></textarea>'
      + '<label>答案 / 解释 (back)　— 可留空，之后补</label><textarea id="lcBack" rows="2" placeholder="用自己的话写清楚"></textarea>'
      + '<label>标签 tags（逗号分隔）</label><input id="lcTags" placeholder="limits, sandwich">'
      + '<div class="lc-row"><button class="lc-btn" id="lcSave">存入错题本</button><button class="lc-btn mut" id="lcClose">关闭</button></div>'
      + '<div class="lc-ok" id="lcOk">已存 ✓ 会在复习页按间隔重复出现。</div>'
      + '<div class="lc-recent">错题本共 <b>' + H.cards().length + '</b> 张　·　<a href="review.html">去复习 →</a></div>';
    panel.querySelectorAll(".lc-seg button").forEach(function (bn) { bn.onclick = function () { type = bn.getAttribute("data-t"); render(); }; });
    panel.querySelector("#lcClose").onclick = hide;
    panel.querySelector("#lcSave").onclick = save;
  }
  function save() {
    var front = panel.querySelector("#lcFront").value.trim();
    if (!front) { panel.querySelector("#lcFront").focus(); return; }
    var back = panel.querySelector("#lcBack").value.trim();
    var tags = panel.querySelector("#lcTags").value.split(",").map(function (s) { return s.trim(); }).filter(Boolean);
    H.addCard({ course: course, week: week, type: type, front: front, back: back, tags: tags, src: src });
    var ok = panel.querySelector("#lcOk"); ok.style.display = "block";
    panel.querySelector("#lcFront").value = ""; panel.querySelector("#lcBack").value = ""; panel.querySelector("#lcTags").value = "";
    count();
    setTimeout(function () { ok.style.display = "none"; var r = panel.querySelector(".lc-recent"); if (r) r.innerHTML = '错题本共 <b>' + H.cards().length + '</b> 张　·　<a href="review.html">去复习 →</a>'; }, 1400);
  }
  function show() { render(); mask.style.display = "block"; panel.style.display = "block"; setTimeout(function () { var f = panel.querySelector("#lcFront"); if (f) f.focus(); }, 40); }
  function hide() { mask.style.display = "none"; panel.style.display = "none"; }
  fab.onclick = function () { panel.style.display === "block" ? hide() : show(); };
  mask.onclick = hide;
  count();
})();
