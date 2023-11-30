document.addEventListener("DOMContentLoaded", function () {
  const navList = document.querySelector(".nav-list");
  const navbar = document.querySelector(".navbar");
  const navbarToggler = document.createElement("button");
  navbarToggler.className = "navbar-toggler";
  navbarToggler.innerHTML = "&#9776;";
  navbar.appendChild(navbarToggler);

  navbarToggler.addEventListener("click", function () {
    navList.classList.toggle("show");
  });
});
