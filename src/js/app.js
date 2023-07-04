import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');

  $('a[href^="#"]').click(function () {
    const speed = 400;
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? "html" : href);
    const position = target.offset().top;
    $("body,html").animate({ scrollTop: position - 65 }, speed, "swing");
    return;
  });
  
  $('.l-header__hamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.l-header__sp-menu').toggleClass('show-menu');
    $('body').toggleClass('scroll-prevent');
  });
  
  $('.l-header__sp-menu ul li a').click(function() {
    $('.l-header__hamburger').trigger('click');
  });
  
  $('.p-recruit__inner__list').slick({
    adaptiveHeight: true,
    variableWidth: true,
    prevArrow: '<button type=button class=slick-prev></button>',
    nextArrow: '<button type=button class=slick-next></button>',
    speed: 300,
    slidesToShow: 1,
  });
})
