// start: Navbar
document
  .querySelectorAll('[data-toggle~="navbar-submenu-content"]')
  .forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();

      this.closest(".navbar-submenu-wrapper")
        .querySelectorAll('[data-toggle~="navbar-submenu-content"]')
        .forEach((item) => item.classList.remove("active"));
      this.classList.add("active");

      this.closest(".navbar-submenu-wrapper")
        .querySelectorAll(".navbar-submenu-content-wrapper")
        .forEach((item) => item.classList.remove("active"));
      document.querySelector(this.dataset.target).classList.add("active");
    });
  });

document
  .querySelector(".navbar-toggle")
  .addEventListener("click", function (e) {
    e.preventDefault();

    document
      .querySelector(".navbar-menu-wrapper")
      .classList.add("navbar-active");
  });

document.querySelectorAll('[data-toggle~="navbar-submenu"]').forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    if (window.innerWidth > 767) return;

    document.querySelector(this.dataset.target).classList.add("navbar-active");
  });
});

document.querySelectorAll('[data-dismiss="navbar-submenu"]').forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    this.closest(".navbar-active").classList.remove("navbar-active");
  });
});

document.querySelectorAll('[data-dismiss="navbar-menu"]').forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    document
      .querySelectorAll(".navbar-active")
      .forEach((el) => el.classList.remove("navbar-active"));
  });
});
// end: Navbar
