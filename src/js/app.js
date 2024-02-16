import $ from "jquery";
import 'slick-carousel';

// ハンバーガーメニュー
$(function () {
  const headerHamburger = $('#js-hamburger');
  const headerNav = $('#js-sp-nav');
  headerHamburger.on('click', function () {
    headerHamburger.toggleClass('active');
    headerNav.toggleClass('active');

    if ($('body').css('overflow') === 'hidden') {
      $('body').css({ overflow: '' });
    } else {
      $('body').css({ overflow: 'hidden' });
    }
  });
})

// カルーセル
$(function () {
  $('.slick-carousel').slick({
    swipeToSlide: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    responsive:[{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
})