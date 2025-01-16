import $ from "jquery";
import 'slick-carousel';


$(function () {

  $('.slick').slick({
    arrows: true,              //次へ/前へ矢印を有効にする
    slidesToShow: 3,           //一度に表示するスライドの数
    infinite: true,            //無限ループ
    swipeToSlide: false,       //slidesToScrollに関係なくスワイプしてスライドする
    accessibility: true,       //タブと矢印キーによるナビゲーションを有効にします。
    appendArrows: $('.p-jobslist__ul'),  //ナビゲーション矢印が添付される場所を変更する
    // slidesToScroll: 1,
    prevArrow: '<div class="p-jobslist__arrow-left"></div>',  // カスタム左矢印
    nextArrow: '<div class="p-jobslist__arrow-right"></div>', // カスタム右矢印
    variableWidth: true,
  });

  //ハンバーガーメニュー処理
  const hamburger = document.querySelector('.l-header__hamburger');
  const headNav = document.querySelector('#js-nav');
  var body = $('body');

  hamburger.addEventListener('click', () => {
    body.toggleClass('active');
    if (hamburger.classList.contains("is-active")) {
      hamburger.classList.remove('is-active');
      headNav.classList.remove('is-active')
    } else {
      document.body.classList.add('scroll'); //これがないとnavメニューがある状態でもスクロールができてしまう
      hamburger.classList.add('is-active');
      headNav.classList.add('is-active') //navメニューがでなくなる
    }
  });
  headNav.addEventListener('click', () => {
    document.body.classList.remove('scroll'); //これなしだとハンバーガーメニューを閉じスクロールが出来なくなる。
    hamburger.classList.remove('is-active');
    headNav.classList.remove('is-active') //navメニューが閉じなくなる
  });

  $('.p-nav__list-sp a[href^="#"]').on('click', function () {
    const topHeight = 80;
    const speed = 400;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top - topHeight;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
  });
});