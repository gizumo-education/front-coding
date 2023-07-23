import $ from "jquery";

$(function () {
  console.log('環境構築完了');

  //ハンバーガーメニュー
  const ham = $('#js-hamburger');
  const nav = $('#js-nav');
  ham.on('click', function () {
    ham.toggleClass('active');
    nav.toggleClass('active');
    $("body").toggleClass("active");
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

})
