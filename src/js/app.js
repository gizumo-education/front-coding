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
    preconstrow: '<div class="prev-arrow"></div>',
    nextArrow: '<div class="next-arrow"></div>',
    constiableWidth: true,
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
    const topHeight = 80;
    const speed = 400;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top - topHeight;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});