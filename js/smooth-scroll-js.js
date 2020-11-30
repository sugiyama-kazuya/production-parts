/********************************************************************/
/* パターン１　javascriptで記述
/********************************************************************/

window.onload = function () {
  const smoothScrollTriger = document.querySelectorAll("a[href^='#']");

  for (let i = 0; i < smoothScrollTriger.length; i++) {
    smoothScrollTriger[i].addEventListener("click", function (e) {
      e.preventDefault();
      const headerHeight = 70;
      // 属性を取得
      let href = smoothScrollTriger[i].getAttribute("href");
      // 属性からターゲットとなる箇所を取得して、DOMから取得
      let targetElement = document.getElementById(href.replace("#", ""));
      // getBoundingClientRect = 現在表示されている画面の上部の高さを取得する
      // ターゲットの上から見た位置を取得する。
      const rect = targetElement.getBoundingClientRect().top;
      // 現在のスクロール量を取得する
      const offset = window.pageYOffset;
      // console.log(offset);

      const target = rect + offset - headerHeight;
      console.log("ターゲット", rect);
      console.log("スクロール量", offset);
      console.log("header", headerHeight);
      console.log("結果", target);

      window.scrollTo({
        top: target,
        behavior: "smooth",
      });
    });
  }
};

