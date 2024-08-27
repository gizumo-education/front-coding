import $ from "jquery";
import 'slick-carousel'

$(function() {
  console.log('環境構築完了');

  //メニュースクロールイン
  $('.l-header__hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.l-header__nav-menu').toggleClass('active');
    if ($('body').css('overflow') === 'hidden') {
      $('body').css({ overflow: '' });
    } else {
      $('body').css({ overflow: 'hidden' });
    }
  })

  //該当セクションスクロール
  $('a[href^="#"]').click(function () {
    const speed = 600;
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? "html" : href);
    const position = target.offset().top;
    $("body,html").animate({ scrollTop: position - 60 }, speed, "swing");
    $('.l-header__hamburger').removeClass('active');
    $('.l-header__nav-menu').removeClass('active');
    document.body.style.overflow = 'auto';
  });

  //無限スライダー
  $('#p-news__wrapper').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});
