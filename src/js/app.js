import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');

  const ham = $('#js-header__nav__toggle');
  const nav = $('#js-header__nav');
  ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
  });
  
  const header = $('#header');
  
  $('a[href^="#"]').on('click', function() {
    const gap = header.outerHeight();
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top - gap;
    
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
  
$(document).ready(function(){
  $('.c-jobs__detail__wrapper').slick({
    autoplay: true, //自動再生
    infinite: true, //スライドのループ有効化
    // dots: true, //ドットのナビゲーションを表示
    slidesToShow: 4, //表示するスライドの数
    slidesToScroll: 1, //スクロールで切り替わるスライドの数
    responsive: [{
      breakpoint: 768, //ブレークポイントが768px
      settings: {
        slidesToShow: 4, //表示するスライドの数
        slidesToScroll: 1, //スクロールで切り替わるスライドの数
      }
    }, {
      breakpoint: 480, //ブレークポイントが480px
      settings: {
        slidesToShow: 1, //表示するスライドの数
        slidesToScroll: 1, //スクロールで切り替わるスライドの数
      }
    }]
  });
});
})
