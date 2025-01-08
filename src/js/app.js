import $ from "jquery";
// import $ from "slick-carousel";

$(function () {
  console.log('環境構築完了');
})

//ハンバーガーメニュー処理
const hamburger = document.querySelector('.l-header__hamburger');
const headNav = document.querySelector('#js-nav');

hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains("is-active")) {
    hamburger.classList.remove('is-active');
    headNav.classList.remove('is-active')

  } else {
    hamburger.classList.add('is-active');
    headNav.classList.add('is-active')
  }

  headNav.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    headNav.classList.remove('is-active')
  });
});




$(function () {
  $('.select').change(function () {
    if ($(this).val() === 'all') {
      showItems(); //全リスト表示
      return;
    }
    filterCategory($(this).val()); //フィルタリング
  });
});

// const left = document.querySelector('.p-jobslist__arrow-left');
// const right = document.querySelector('.p-jobslist__arrow-right');

// $(".p-jobslist__content").slick(function () {
//   if ($(".p-jobslist__arrow-left").click {
//     infinite: true,

//     })else if ($(".p-jobslist__arrow-right").click{

// })

// })


// $(document).ready(function () {
//   // Slickスライダーの初期化
//   $(".p-jobslist__ul").slick({
//     infinite: true,           // 無限ループ
//     slidesToShow: 1,          // 一度に表示するスライド数
//     slidesToScroll: 1,        // 一度にスクロールするスライド数
//     arrows: true,             // カスタム矢印を使用
//     prevArrow: $(".p-jobslist__arrow-left"), // 左矢印
//     nextArrow: $(".p-jobslist__arrow-right"), // 右矢印
//     fade: true,               // フェードエフェクト
//     speed: 500,               // アニメーション速度（ミリ秒）
//     autoplay: false,          // 自動再生を無効化
//   });
// });
