// Draws fake app screens into every .shot[data-ui]. Placeholders until real screenshots exist.
(function () {
  function bars(n, wmin, wmax, cls) {
    var out = "";
    for (var i = 0; i < n; i++) {
      var w = wmin + ((i * 37) % (wmax - wmin));
      out += '<i class="ln ' + (cls || "") + '" style="width:' + w + '%"></i>';
    }
    return out;
  }
  function dots() { return '<div class="wbar"><i></i><i></i><i></i><b></b></div>'; }
  var kinds = {
    chat: function () {
      return dots() + '<div class="row">' +
        '<div class="col" style="flex:0 0 18%;border-right:1px solid var(--s-line)">' + bars(7, 40, 85, "sm") + '</div>' +
        '<div class="col" style="flex:1;padding:6%">' +
          '<div class="msg l">' + bars(2, 60, 90, "sm") + '</div>' +
          '<div class="msg r">' + bars(1, 50, 70, "sm") + '</div>' +
          '<div class="msg l">' + bars(3, 55, 95, "sm") + '</div>' +
          '<div class="msg r">' + bars(2, 40, 80, "sm") + '</div>' +
          '<div class="input"></div>' +
        '</div>' +
        '<div class="col" style="flex:0 0 22%;border-left:1px solid var(--s-line)"><div class="card">' + bars(3, 50, 90, "sm") + '</div><div class="card">' + bars(2, 50, 80, "sm") + '</div></div>' +
      '</div>';
    },
    graph: function () {
      var svg = '<svg viewBox="0 0 400 260" preserveAspectRatio="none" class="fill">' +
        '<g stroke="var(--s-line2)" stroke-width="1.5" fill="none">' +
        '<path d="M80 60 L200 130 L320 60 M200 130 L120 210 M200 130 L290 205 M320 60 L330 200"/></g>' +
        '<g fill="var(--s-panel)" stroke="var(--s-line2)"><rect x="50" y="42" width="60" height="30" rx="6"/><rect x="290" y="42" width="60" height="30" rx="6"/><rect x="90" y="196" width="60" height="30" rx="6"/><rect x="260" y="190" width="60" height="30" rx="6"/><rect x="300" y="186" width="60" height="30" rx="6"/></g>' +
        '<rect x="165" y="112" width="70" height="36" rx="8" fill="var(--s-accent)" opacity="0.9"/>' +
        '</svg>';
      return dots() + '<div class="row"><div class="col" style="flex:1;position:relative">' + svg + '</div>' +
        '<div class="col" style="flex:0 0 26%;border-left:1px solid var(--s-line)">' + bars(9, 40, 90, "sm") + '</div></div>';
    },
    term: function () {
      return '<div class="col term">' +
        '<i class="ln acc" style="width:34%"></i>' + bars(3, 50, 85, "sm dim") +
        '<i class="ln acc" style="width:22%"></i>' + bars(5, 30, 70, "sm dim") +
        '<i class="ln warn" style="width:44%"></i>' + bars(2, 40, 60, "sm dim") +
        '<i class="ln acc" style="width:28%"></i><span class="cursor"></span></div>';
    },
    table: function () {
      var rows = "";
      for (var i = 0; i < 9; i++) rows += '<div class="tr"><i class="ln sm" style="width:30%"></i><i class="ln sm" style="width:16%"></i><i class="ln sm" style="width:12%"></i><i class="bar" style="width:' + (25 + (i * 23) % 60) + '%"></i></div>';
      return dots() + '<div class="row"><div class="col" style="flex:0 0 24%;border-right:1px solid var(--s-line)"><div class="chip on"></div><div class="chip"></div><div class="chip"></div><div class="chip on"></div><div class="chip"></div></div>' +
        '<div class="col" style="flex:1"><div class="tr head"><i class="ln sm" style="width:20%"></i></div>' + rows + '</div></div>';
    },
    dash: function () {
      var svg = '<svg viewBox="0 0 400 120" preserveAspectRatio="none" class="fill"><path d="M0 100 L40 80 L80 88 L120 60 L160 66 L200 40 L240 52 L280 30 L320 44 L360 20 L400 28 L400 120 L0 120 Z" fill="var(--s-accent)" opacity="0.18"/><path d="M0 100 L40 80 L80 88 L120 60 L160 66 L200 40 L240 52 L280 30 L320 44 L360 20 L400 28" stroke="var(--s-accent)" stroke-width="2" fill="none"/></svg>';
      return dots() + '<div class="col" style="padding:4%">' +
        '<div class="grid3"><div class="card">' + bars(2, 40, 70, "sm") + '</div><div class="card">' + bars(2, 40, 70, "sm") + '</div><div class="card">' + bars(2, 40, 70, "sm") + '</div></div>' +
        '<div class="card" style="flex:1;position:relative;min-height:38%">' + svg + '</div>' +
        '<div class="grid3"><div class="card">' + bars(1, 60, 60, "sm") + '</div><div class="card">' + bars(1, 60, 60, "sm") + '</div><div class="card">' + bars(1, 60, 60, "sm") + '</div></div>' +
      '</div>';
    },
    game: function () {
      var s = "";
      for (var i = 0; i < 26; i++) s += '<i class="spark" style="left:' + ((i * 53) % 96) + '%;top:' + ((i * 29) % 80) + '%;transform:rotate(' + (i * 40) + 'deg)"></i>';
      return '<div class="col game">' + s + '<div class="grave"></div><div class="hud"><i class="ln acc" style="width:18%"></i><i class="ln sm" style="width:10%"></i><i class="ln warn" style="width:14%"></i></div></div>';
    },
    overlay: function () {
      return '<div class="col game" style="justify-content:flex-start"><div class="strip"><div class="badge"></div><div class="badge"></div><div class="badge on"></div>' + bars(2, 30, 55, "sm") + '</div></div>';
    },
    phone: function () {
      var w = "";
      for (var i = 0; i < 18; i++) w += '<i class="wave" style="height:' + (20 + (i * 31) % 70) + '%"></i>';
      return '<div class="col phone"><div class="phead">' + bars(1, 50, 50, "sm") + '</div><div class="mic"></div><div class="waves">' + w + '</div>' + bars(3, 60, 90, "sm dim") + '</div>';
    },
    reader: function () {
      return dots() + '<div class="row"><div class="col" style="flex:1;padding:6% 8%"><i class="ln" style="width:55%;height:8%"></i>' + bars(5, 70, 98, "sm") + '<div class="code">' + bars(4, 30, 70, "sm dim") + '</div>' + bars(4, 60, 95, "sm") + '</div>' +
        '<div class="col" style="flex:0 0 22%;border-left:1px solid var(--s-line)">' + bars(7, 40, 80, "sm dim") + '</div></div>';
    },
    video: function () {
      var g = "";
      for (var i = 0; i < 8; i++) g += '<div class="card">' + bars(2, 40, 85, "sm") + '</div>';
      return dots() + '<div class="col" style="padding:4%"><div class="player"><div class="prog"><i style="width:38%"></i></div></div><div class="grid4">' + g + '</div></div>';
    }
  };
  document.querySelectorAll(".shot[data-ui]").forEach(function (el) {
    var k = kinds[el.getAttribute("data-ui")] || kinds.chat;
    el.insertAdjacentHTML("afterbegin", '<div class="ui">' + k() + "</div>");
  });
})();
