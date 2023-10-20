import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');

const ham = $('#js-hamburger');
const nav = $('#js-nav');
const link = $('.l-header__link');
const body = $('body');
const top = $('#top');
const news = $('#news');
const summary = $('#summary');
const flow = $('#flow');
const content = $('#content')

ham.on('click', function () {
  ham.toggleClass('active');
  nav.toggleClass('active');
  body.toggleClass('active');
});

link.on('click', function () {
  nav.toggleClass('active');
  ham.toggleClass('active');
  body.toggleClass('active');
});

$(".slick").slick({
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button class="slide-arrow slide-prev"></button>',
  nextArrow: '<button class="slide-arrow slide-next"></button>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
      slidesToShow: 1,
      },
    },
  ],
});

$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position -20 }, speed, "swing");
  return false;
});


})
