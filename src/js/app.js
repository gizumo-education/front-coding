import $ from "jquery";
import 'slick-carousel';


$(function () {
  console.log('環境構築完了');

  //ハンバーガーメニュー
  let prevScrollPosition = 0;
  const ham = $('#js-hamburger');
  const nav = $('#js-nav');
  ham.on('click', function () {
    $(this).toggleClass('active');
    nav.toggleClass('active');
    $('body').toggleClass('active');

    if (nav.hasClass('active')) {
      prevScrollPosition = $(window).scrollTop();
    }

    if (!nav.hasClass('active')) {
      $(window).scrollTop(prevScrollPosition);
    }
  });



  const header = $('#header');
  $('a[href^="#"]').on('click', function () {
    let href = $(this).attr("href");
    const gap = header.outerHeight();
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - gap;
    var speed = 500;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
  })


  $('.slick').slick({
    arrows: true,
    adaptiveHeight: true,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 788,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
})
