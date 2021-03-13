var x = document.getElementById("hdn");
var y = document.getElementById("mb");
var cr = document.getElementById("cross");

y.onclick = function() {
  x.style.display = "block";
}
cr.onclick = function() {
  x.style.display = "none";
}