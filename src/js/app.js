import $ from "jquery";
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$(window).on('load', function () {
  const $slider = $('.p-job__new-job');
  const $hamburger = $('.l-header__hamburger');
  const $spMenu = $('.l-header__sp-menu');
  const $body = $('body');
  const $header = $('.l-header');

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

  $hamburger.on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('is-open');
    $spMenu.toggleClass('is-open');
    $body.toggleClass('is-fixed', $(this).hasClass('is-open'));
  });

  $(document).on('click', function (e) {
    const isClickInside = $(e.target).closest('.l-header__hamburger, .l-header__sp-menu').length > 0;

    if (!isClickInside) {
      $hamburger.removeClass('is-open');
      $spMenu.removeClass('is-open');
      $body.removeClass('is-fixed');
    }
  });

  $spMenu.find('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    const speed = 800;
    const href = $(this).attr('href');
    const $target = $(href === '#' || href === '' ? 'html' : href);
    const targetOffset = $target.offset().top;
    const position = targetOffset - $header.outerHeight();

    $('html, body').animate({ scrollTop: position }, speed);

    $hamburger.removeClass('is-open');
    $spMenu.removeClass('is-open');
    $body.removeClass('is-fixed');
  });
});
