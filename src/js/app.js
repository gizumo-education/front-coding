import $ from "jquery";
import 'slick-carousel';

$(function () {
  console.log('環境構築完了');
  
  // スライダー
  window.addEventListener('load', () => {
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
    const hamburger = document.querySelector('.l-header__hamburger');
    const headNav = document.querySelector('#js-nav');
    const body = document.querySelector('body');
    
    hamburger.addEventListener('click', () => {
      body.classList.toggle('active');
      if (hamburger.classList.contains("is-active")) {
        hamburger.classList.remove('is-active');
        headNav.classList.remove('is-active')
      } else {
        hamburger.classList.add('is-active');
        headNav.classList.add('is-active');
      }
    });
    headNav.addEventListener('click', () => {
      hamburger.classList.remove('is-active');
      headNav.classList.remove('is-active')
    });
    
    // ページ内リンク
    $('.p-nav__list a[href^="#"]').click(function () {
      var adjust = 80;
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - adjust;
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });
  });
})