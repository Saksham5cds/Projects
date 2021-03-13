var a = document.getElementById("sshow");
var b = document.getElementById("sver");

b.onclick = function() {
  a.style.display = "block";
}

var gd = document.getElementById("gld");
var c = document.getElementById("gshow");

gd.onclick = function() {
  c.style.display = "block";
}

window.onclick = function(event) {
  if(event.target == sshow || event.target == gshow) {
    a.style.display = "none";
    c.style.display = "none";
  }
}
