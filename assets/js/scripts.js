let navbar = document.getElementById("menu_navbar");
let menuBar = document.getElementById("menu_icon");
let closeBar = document.getElementById("menu_close");

menuBar.addEventListener("click", function () {
  this.classList.remove("show-menu");
  closeBar.classList.add("show-menu");
  navbar.classList.add("active");
});

closeBar.addEventListener("click", function () {
  this.classList.remove("show-menu");
  menuBar.classList.add("show-menu");
  navbar.classList.remove("active");
});
