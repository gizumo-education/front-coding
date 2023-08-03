import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
})

$(function () {
  $(".p-newrequest__wrapper").slick({
    variableWidth: true,
    autoplay: false, //自動再生
    infinite: false, //スライドのループ有効化
    dots: false, //ドットのナビゲーションを表示 削除予定
    slidesToShow: 4, //表示するスライドの数
    slidesToScroll: 1, //スクロールで切り替わるスライドの数
    prevArrow: '<button class="slide-arrow slick-prev"></button>',
    nextArrow: '<button class="slide-arrow slick-next"></button>',
        responsive: [{
      breakpoint: 767, //ブレークポイントが768px
      settings: {
        slidesToShow: 1, //表示するスライドの数
        slidesToScroll: 1, //スクロールで切り替わるスライドの数
      }
    }]
  });
});