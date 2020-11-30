/********************************************************************/
/*　smoothscroll プラグイン
/********************************************************************/

window.onload = function () {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    header: "#header",
    easing: "easeInOutQuint",
  });
};
