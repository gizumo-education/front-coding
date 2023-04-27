import $ from "jquery";
import "slick-carousel";

$(function() {
  console.log('環境構築完了');
})

$('.l-header__hamburgerMenu, .l-header__hamburgerMenu__closeIcon').click(function() {
  $(".l-header__hamburgerMenu").toggleClass("u-hidden");
  $(".l-header__hamburgerMenu__closeIcon").toggleClass("u-active__icon");
  $('.l-header__hamburgerMenu__inside').toggleClass("u-active__menu");
  scrollToggle();
});

$('.l-header__hamburgerMenu__inside__box__text').click(function(e) {
  $('.l-header__hamburgerMenu__inside').toggleClass("u-active__menu");
  $(".l-header__hamburgerMenu__closeIcon").toggleClass("u-active__icon");
  $('.l-header__hamburgerMenu').removeClass("u-hidden");
  scrollToggle();
  e.preventDefault();
  var headerHight = $("#header").height();
  var target = $(this).attr("href");
  var position = $(target).offset().top - headerHight;
  $("html, body").animate({scrollTop: position}, 1500);
});

function scrollToggle() {
  if ($(".l-header__hamburgerMenu__inside").hasClass("u-active__menu")) {
    $("body").css('overflow', 'hidden');      
  } else {
    $("body").css('overflow', 'auto');
  }
}

$('.p-article__list').slick({
  autoplay: false,
  cssEase: 'linear',
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipe: true,
  swipeToSlide: true,
  arrows: true,
  prevArrow: '<div class="p-article__list__arrow p-article__list__prev"></div>',
  nextArrow: '<div class="p-article__list__arrow p-article__list__next"></div>',
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]
});   



