import $ from "jquery";
import 'slick-carousel';
  
$(function() {

  // スライダー
  $('.slick').slick({
    arrows: true,
    slidesToShow: 4,
    infinite: true,
    swipeToSlide: false,
    accessibility: true,
    appendArrows: $('.is-relative'),
    prevArrow: '<div class="prev-arrow"></div>',
    nextArrow: '<div class="next-arrow"></div>',
    variableWidth: true,
  });
  
  // ハンバーガーメニュー
  const hamburger = $('.l-header__hamburger');
  const headNav = $('#js-nav');
  const body = $('body');
  
  hamburger.on('click', function() {
    body.toggleClass('active');
    if (hamburger.hasClass("is-active")) {
      hamburger.removeClass('is-active');
      headNav.removeClass('is-active')
    } else {
      hamburger.addClass('is-active');
      headNav.addClass('is-active');
    }
  });
  headNav.on('click', function() {
    hamburger.removeClass('is-active');
    headNav.removeClass('is-active')
  });
  
  // ページ内リンク
  $('.p-nav__list a[href^="#"]').on('click', function () {
    const topHeight = 80;
    const speed = 400;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top - topHeight;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});