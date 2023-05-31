import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
})

function buttonOpen() {
  $('.l-header__hamburger-menu__bar').toggleClass('active');
}
function showMenu() {
  $('.l-header__nav').toggleClass('active');
}
function stopScroll() {
  $('body').toggleClass('fixed');
}


$('.l-header__hamburger-menu__button').click(function() {
  buttonOpen();
  showMenu();
  stopScroll();
});



$('a[href^="#"]').click(function(){
  stopScroll();
  let headerHeight = $('.l-header').outerHeight();
  let speed = 400;
  let href= $(this).attr("href");
  let target = $(href === "#" || href === "" ? 'html' : href);
  let position = target.offset().top - headerHeight;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  buttonOpen();
  showMenu();
  return false;
});

$('.p-recruit__inner__lists').slick({
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
