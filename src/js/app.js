import $ from "jquery";

$(function () {
  console.log('環境構築完了');
})

//メニュー開閉時のハンバーガー
$(function () {
  $(".l-header__wrapper").click(function () {
    $(this).toggleClass("l-header__close");
  });
});

$(function () {
  // ハンバーガーメニューのクリックイベント
  $(".l-header__wrapper").click(function () {
    $(".l-header__wrapper").toggleClass("is-active");
    $(".l-header__nav").toggleClass("is-active");
  });
});

//メニュー表示時は背景がスクロールしない
$(document).ready(function () {
  $('.l-header__wrapper').click(function () {
    $('body').toggleClass('l-header__overflow');
  });

//スライドショー
  $(document).ready(function () {
    $(".l-inner__job--container").slick({});
  });
});

//スライドショー
$(document).ready(function () {
  $('.l-inner__job--container').slick({
    infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1
  });
});
