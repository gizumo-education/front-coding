import $ from "jquery";
import 'slick-carousel'


$(function () {
  // ハンバーガーメニュー
  $('.l-header__hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.l-header__hamburger_menu').toggleClass('active');

    if ($('body').hasClass('no_scroll')) {
      $('body').removeClass('no_scroll');
      return;
    }
    $('body').addClass('no_scroll');
  });

  // ページ内リンク
  $('a[href^="#"]').on('click', function () {
    const href = $(this).attr('href');
    const target = $(href == "#" || href == "" ? "html" : href);
    const height = $('.l-header').outerHeight();
    const position = target.offset().top - height;
    const speed = 500;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // ハンバーガーメニュー内リンク
  $('.l-header__hamburger_menu a').on('click', function () {
    $('.l-header__hamburger_menu').toggleClass('active');
    $('.l-header__hamburger').toggleClass('active');
    $('body').removeClass('no_scroll');
  });

  // スライダー
  $('#slider').slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});
