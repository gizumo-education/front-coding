import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
})

//ハンバーガー
$(".c-burger-btn").on('click',function() {
  $('.p-drawer').toggleClass('open');
  $('body').toggleClass('noscroll');
});

$("a[href^='#']:not([href='#'])").click(function() {

  $('body').toggleClass('noscroll');
  $('.p-drawer').toggleClass('open');

  let target = $($(this).attr("href")).offset().top;

  target -=80;

  $('html, body').animate({scrollTop: target}, 500);
});

$('.p-work__list').slick({
  variableWidth: true,
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
