let mc = document.querySelector(".cursor");
let nav = document.querySelectorAll(".links li");
let glass = document.querySelector("#mag");
let burger = document.querySelectorAll(".b_con li a");

window.addEventListener("mousemove", cursor);
function cursor(event) {
  mc.style.top = event.pageY + "px";
  mc.style.left = event.pageX + "px";
}

nav.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mc.classList.add("cursor_hover");
  });
  link.addEventListener("mouseleave", () => {
    mc.classList.remove("cursor_hover");
  });
});

burger.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mc.classList.add("cursor_hover");
  });
  link.addEventListener("mouseleave", () => {
    mc.classList.remove("cursor_hover");
  });
});

glass.addEventListener("mouseover", () => {
  mc.classList.add("cursor_hover");
});

glass.addEventListener("mouseleave", () => {
  mc.classList.remove("cursor_hover");
});

/* burger */

let burg = document.getElementById("brgr");
let con = document.getElementById("con");

burg.onclick = function () {
  con.classList.toggle("show");
};
