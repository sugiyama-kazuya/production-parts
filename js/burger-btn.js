$(function () {
  // burger-btn-1
  const burgerBtn = document.getElementById("js-burger-btn-1");
  const navMenu = document.getElementById("js-nav-menu");

  $("#js-burger-btn-1").click(function () {
    if (burgerBtn && navMenu) {
      burgerBtn.classList.toggle("burger-btn--active");
      navMenu.classList.toggle("nav-menu--active");
    }
  });
  // burger-btn-1 end

  // burger-btn-2
  $("#js-burger-btn-2").click(function () {
    $(this).toggleClass("burger-btn--active");
  });
  // burger-btn-2 end
});
