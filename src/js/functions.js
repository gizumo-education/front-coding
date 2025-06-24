import $ from "jquery";

/**
 * ハンバーガーメニュートグル処理
 */
const toggleMenu = () => {
  const menu = $(".l-header__sp-menu__items")
  menu.stop();
  if (menu.hasClass("off")) {
    // スクロール禁止
    menu.animate(
      {
        marginLeft: "0px"
      },
      500,
    );
  } else {
    // スクロール禁止解除
    menu.animate(
      { marginLeft: "100%" },
      500,
    )
  }
  // スクロール禁止
  $("body").toggleClass("no_scroll")
  // ハンバーガーメニュー表示状態クラス切り替え
  menu.toggleClass("off")
}

/**
 * ハンバーガーメニューボタンアニメーションクラス付与処理
 */
const toggleHamburgerMenuButton = () => {
  const button = $("#hamburger-menu");
  // acrive: アニメーションクラス
  button.toggleClass("active")
}

/**
 * スムーススクロール
 * @param {JQuery<HTMLElement>}
 */
const scrollToTheSection = (ele) => {
  const speed = 400
  const targetId = ele.data("menu")
  const targetEle = $(`#${targetId}`)
  const adjust = 70;
  const position = targetEle.offset().top
  $("html").animate({scrollTop: position - adjust}, speed, 'swing')
  toggleMenu()
  toggleHamburgerMenuButton()
}

export {
  toggleMenu,
  toggleHamburgerMenuButton,
  scrollToTheSection,
}
