import $ from "jquery";
import 'slick-carousel';

$(function () {
  console.log('環境構築完了');
});

$('#js-hamburger').on('click', function() {
  console.log('clicked!')
  $('#js-hamburger').toggleClass("active");
  $('#js-hamburger__items').toggleClass("active");
  $('body').toggleClass("active");
});

$('.p-requirement__carousel').slick({
  variableWidth:true,
  arrows: true,
  slidesToShow: 4,
  speed: 600,
  prevArrow: '<div class="slick-prev"><div class="slick-prev__arrow"></div></div>',
  nextArrow: '<div class="slick-next"><div class="slick-next__arrow"></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
      }
    }
  ],
});

$(function () {

  let headerHeight = $('.l-header__nav').outerHeight();
  let speed = 600;

  // ページ内リンク スクロール（固定ヘッダー分下にずらす）
  $('a[href^="#"]').on('click', function() {

    $('#js-hamburger').toggleClass("active");
    $('#js-hamburger__items').toggleClass("active");
    $('body').toggleClass("active");

    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - headerHeight;
    $('html, body').stop().animate({scrollTop:position}, speed, "swing");
  });
});