const hamMenu = document.querySelector(".menu-icon");



const offScreenMenu = document.querySelector(".header-items");

document.addEventListener("DOMContentLoaded", function() {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

});


hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});