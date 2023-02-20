import $ from "jquery";
import "slick-carousel";

$('.slider').slick({
  slider: $('.p-news__container-box'),
  autoplay: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.p-news__container__left'),
  nextArrow: $('.p-news__container__right'),
  dots: false,
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

//ボタンをクリック
$('.openbtn').on('click', function () {
  $(this).toggleClass('active');
  $('.p-menu').toggleClass('panelactive');
  $('body').toggleClass('no_scroll');
});
//リンクをクリック
$(function(){
  $('a[href^="#"]').on('click' ,function(){
    $('.p-menu').removeClass('panelactive');
    $(".openbtn").removeClass('active');
    $('body').removeClass('no_scroll');
    var adjust = -50;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});