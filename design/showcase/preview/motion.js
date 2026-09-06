// Scroll choreography. Two kinds of element:
//   [data-scene]  a tall section with a sticky child; --p goes 0..1 across its scroll range.
//   [data-view]   any element; --t goes 0..1 as its top travels from 92% to 45% of the viewport.
// Inside a scene, [data-from="a,b"] gets --t (eased) from scene progress window a..b.
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // [data-enter]: play the section's entrance once, when a third of it is on screen.
  var enters = document.querySelectorAll("[data-enter]");
  if (enters.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.3 });
    enters.forEach(function (el) { io.observe(el); });
  }
  var scenes = Array.prototype.slice.call(document.querySelectorAll("[data-scene]"));
  var views = Array.prototype.slice.call(document.querySelectorAll("[data-view]"));
  function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function ease(x) { return 1 - Math.pow(1 - x, 3); }
  if (reduce) {
    scenes.concat(views).forEach(function (el) { el.style.setProperty("--p", 1); el.style.setProperty("--t", 1); el.querySelectorAll("[data-from]").forEach(function (c) { c.style.setProperty("--t", 1); }); });
    return;
  }
  var start = performance.now();
  function boot() { var b = clamp((performance.now() - start - 250) / 1300); return ease(b); }
  function tick() {
    var vh = window.innerHeight;
    var cap = boot();
    scenes.forEach(function (s) {
      var r = s.getBoundingClientRect();
      var p = clamp(-r.top / (r.height - vh));
      s.style.setProperty("--p", p.toFixed(4));
      s.querySelectorAll("[data-from]").forEach(function (c) {
        var ab = c.getAttribute("data-from").split(",");
        var a = parseFloat(ab[0]), b = parseFloat(ab[1]);
        c.style.setProperty("--t", Math.min(cap, ease(clamp((p - a) / (b - a)))).toFixed(4));
      });
    });
    views.forEach(function (v) {
      var r = v.getBoundingClientRect();
      var t = ease(clamp((vh * 0.92 - r.top) / (vh * 0.47)));
      v.style.setProperty("--t", Math.min(cap, t).toFixed(4));
    });
  }
  var queued = false;
  function onScroll() { if (!queued) { queued = true; requestAnimationFrame(function () { queued = false; tick(); }); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  (function warm() { tick(); if (boot() < 1) requestAnimationFrame(warm); })();
})();
