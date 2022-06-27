let navbar = document.getElementById("navbar");
let link = document.getElementById("link-a");
let showMenu = document.getElementById("show-menu");

link.addEventListener("click", function () {
  document.getElementById("navbar").classList.add("show-menu");
});

showMenu.addEventListener("click", function () {
  document.getElementById("navbar").classList.remove("show-menu");
});
