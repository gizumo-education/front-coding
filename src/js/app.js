import $ from "jquery";
import 'slick-carousel';


$(function () {
  console.log('環境構築完了')
  //ハンバーガーメニューの挙動
  const ham = $('#js-hamburger');
  const nav = $('#js-nav');
  ham.on('click', function () {
    ham.toggleClass('active');
    nav.toggleClass('active');
    $("body").toggleClass("active");
  });

  //slick　カルーセル
  $('.slick').slick({
    slideshowSpeed: 4000,
    fade: true,
    slidesToShow: 1,
    prevArrow: $('.custom-prev-arrow'),
    nextArrow: $('.custom-next-arrow'),
  });




  //スムーススクロール
  const header = $('#header');
  $('a[href^="#"]').on('click', function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    const gap = header.outerHeight();
    let position = target.offset().top - gap;
    var speed = 500;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    //ハンバーガーメニュー動作時の挙動
    nav.toggleClass('active');
    ham.toggleClass('active');
    $("body").toggleClass("active")
  })





})

