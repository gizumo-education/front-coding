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

top.on('click', function () {
  $('body,html').animate({
      scrollTop: 0}, 500);
  return false;
});

news.on('click', function () {
  $('body,html').animate({
      scrollTop: 550}, 500);
  return false;
});

summary.on('click', function () {
  $('body,html').animate({
      scrollTop: 1000}, 500);
  return false;
});

flow.on('click', function () {
  $('body,html').animate({
      scrollTop: 1900}, 500);
  return false;
});

content.on('click', function () {
  $('body,html').animate({
      scrollTop: 3400}, 500);
  return false;
});


})
