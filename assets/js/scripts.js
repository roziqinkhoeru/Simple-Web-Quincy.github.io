let navbar = document.getElementById("menu_navbar");
let menuBar = document.getElementById("menu_icon");
let closeBar = document.getElementById("menu_close");

menuBar.addEventListener("click", function () {
  this.classList.remove("show-menu");
  closeBar.classList.add("show-menu");
  navbar.classList.add("show-menu");
});

closeBar.addEventListener("click", function () {
  this.classList.remove("show-menu");
  menuBar.classList.add("show-menu");
  navbar.classList.remove("show-menu");
});

const navItems = document.querySelectorAll(".nav-item");

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    // since you are only going to have one element
    // with active class use querySelector() as it
    // will return the first element with this class
    // no need to reference an index
    // provided you already have an active class in your DOM

    var current = document.querySelector(".active");
    // let s make sure there is a current active class
    // before trying to remove it from DOM
    if (current) {
      // then use classList to add/remove class names
      current.classList.remove("active");
    }
    this.classList.add("active");
    closeBar.classList.remove("show-menu");
    menuBar.classList.add("show-menu");
    navbar.classList.remove("show-menu");
  });
}
