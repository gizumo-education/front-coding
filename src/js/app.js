import $ from "jquery";

// ハンバーガーメニュー
$(function () {
  const headerHamburger = $('#js-hamburger');
  const headerNav = $('#js-sp-nav');
  headerHamburger.on('click', function () {
    headerHamburger.toggleClass('active');
    headerNav.toggleClass('active');

    if ($("body").css("overflow") === "hidden") {
      console.log('second')
      $("body").css({ overflow: "" });
    } else {
      $("body").css({ overflow: "hidden" });
    }
  });
})