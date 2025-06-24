import $ from "jquery";
import { scrollToTheSection, toggleHamburgerMenuButton, toggleMenu } from "./functions";

$(function() {
  // ハンバーガーメニュークリック時 表示/非表示切り替え
  $("#hamburger-menu").on('click',function() {
    toggleMenu()
    toggleHamburgerMenuButton($(this))
  })

  // ハンバーガーメニュー内ページ内リンク スムーススクロール
  $(".l-header__sp-menu__items")
  .children()
  .on('click',function() {
    scrollToTheSection($(this))
  })
})
