function gE(e, i) {
  // ... (rest of the function remains the same)
}

// ... (other functions remain the same)

function Neko(x, y, active, imagedirectory) {
  // ... (most of the function remains the same)

  x || (x = 0);
  y || (y = 0);
  parseInt(x) != x ? (this.homeXfn = x, this.homeYfn = y, this.findHome(), x = this.homeX, y = this.homeY) : (x = parseInt(x), y = parseInt(y));
  // Set initial position to bottom right corner
  x = window.innerWidth ? window.innerWidth - 32 : document.body.clientWidth - 32; // Adjust for layer size
  y = window.innerHeight ? window.innerHeight - 32 : document.body.clientHeight - 32;

  // ... (rest of the function remains the same)
}

function startANeko() {
  var e = 0, t = 0;
  window.startNekoX && (e = window.startNekoX), window.startNekoY && (t = window.startNekoY);
  parseInt(e) != e && (window.onresize = function() {
    for (var e = 0; e < aNekos.length; e++) aNekos[e].homeXfn && aNekos[e].findHome();
  });
  new Neko(e, t, !1);
  window.onloadOriginal();
}

// ... (rest of the code remains the same)
