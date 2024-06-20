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

//SPメニューを押下で該当セクションンにスムーススクロール
function linkscroll(target) {
  $('html, body').animate({ scrollTop: $(target).offset().top }, 800, 'swing');
}

$('#link__id1').on(function () {
  linkscroll('#target__id1');
});
$('#link__id2').on(function () {
  linkscroll('#target__id2');
});
$('#link__id3').on(function () {
  linkscroll('#target__id3');
});
$('#link__id4').on(function () {
  linkscroll('#target__id4');
});
$('#link__id5').on(function () {
  linkscroll('#target__id5');
});