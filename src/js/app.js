import $ from "jquery";
import 'slick-carousel';

// ハンバーガーメニュー
$(function () {
  const headerHamburger = $('#js-hamburger');
  const headerNav = $('#js-sp-nav');
  const headerNavLink = $('.l-header__sp-nav__items__item a');

  headerHamburger.on('click', function () {
    headerHamburger.toggleClass('active');
    headerNav.toggleClass('active');

    if ($('body').css('overflow') === 'hidden') {
      $('body').css({ overflow: '' });
    } else {
      $('body').css({ overflow: 'hidden' });
    }
  });

  headerNavLink.on('click', function () {
    headerHamburger.toggleClass('active');
    headerNav.toggleClass('active');

    if ($('body').css('overflow') === 'hidden') {
      $('body').css({ overflow: '' });
    } else {
      $('body').css({ overflow: 'hidden' });
    }
  });
});

// ページ内スクロール
$(function () {
  const height = $(".l-header").height();
  $('a[href^="#"]').on('click', function () {
    const speed = 600;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top - height;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// slick カルーセル
$(function () {
  $('.slick-carousel').slick({
    swipeToSlide: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
})