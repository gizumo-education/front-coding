import $ from "jquery";
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$(window).on('load', function() {
  const $slider = $('.p-job__new-job');
  
  $slider.slick({
    dots: true,
    arrows: false, 
    slidesToShow: 4,
    infinite: true, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '0px'
        }
      }
    ]
  });

  $(document).on('click', '.p-job__arrow.left', function () {
    $slider.slick('slickPrev');
  });

  $(document).on('click', '.p-job__arrow.right', function () {
    $slider.slick('slickNext');
  });

  $('.l-header__hamburger').on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('is-open');
    $('.l-header__sp-menu').toggleClass('is-open');

    if ($(this).hasClass('is-open')) {
      $('body').addClass('is-fixed');
    } else {
      $('body').removeClass('is-fixed');
    }
  });

  $(document).on('click', function (e) {
    const isClickInsideHamburgerOrMenu = $(e.target).closest('.l-header__hamburger, .l-header__sp-menu').length > 0 

    if (isClickInsideHamburgerOrMenu) {
      $('.l-header__hamburger').removeClass('is-open');
      $('.l-header__sp-menu').removeClass('is-open'); 
      $('body').removeClass('is-fixed');
    }
  });

  $('.l-header__sp-menu a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    const speed = 800;
    const href = $(this).attr('href');
    const $target = $(href === '#' || href === '' ? 'html' : href);
    const targetOffset = $target.offset().top;
    const headerHeight = $('.l-header').outerHeight();
    const position = targetOffset - headerHeight;

    $('html, body').animate({ scrollTop: position }, speed);

    $('.l-header__hamburger').removeClass('is-open');
    $('.l-header__sp-menu').removeClass('is-open');
    $('body').removeClass('is-fixed');
  });
});
