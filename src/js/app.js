import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');

  const ham = $('#js-header__nav__toggle');
  const nav = $('#js-header__nav');
  ham.on('click', function () {
    ham.toggleClass('active');
    nav.toggleClass('active');
    $("body").toggleClass("active");
  });
  
  $('.l-header__nav a').on('click',function() {
    $('#js-header__nav').removeClass('active');
  });

  $('.l-header__nav a').on('click',function() {
    $('#js-header__nav__toggle').removeClass('active');
  });

  $('.l-header__nav a').on('click',function() {
    $('body').removeClass('active');
  });

  ham.on('click', function () {
    $(window).resize(function() {
      $('#js-header__nav').removeClass('active');
      $('#js-header__nav__toggle').removeClass('active');
      $('body').removeClass('active');
    });
  });

  
  const header = $('#header');
  
  $('a[href^="#"]').on('click', function() {
    const gap = header.outerHeight();
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top - gap;

    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
  
  $(document).ready(function(){
    $('.c-jobs__detail__wrapper').slick({
      autoplay: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipe: true,
      swipeToSlide: true,
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
    });
  });
})
