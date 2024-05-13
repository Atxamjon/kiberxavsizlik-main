document.addEventListener("DOMContentLoaded", function () {
  var burgerMenu = document.querySelector(".burger-menu");
  var links = document.querySelector(".links");

  burgerMenu.addEventListener("click", function () {
    links.classList.toggle("show");
  });
});
