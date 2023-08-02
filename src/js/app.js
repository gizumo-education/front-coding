import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
})

$(function () {
  $(".newrequest__wrapper").slick({
    autoplay: true, //自動再生
    infinite: false, //スライドのループ有効化
    dots: true, //ドットのナビゲーションを表示
    slidesToShow: 4, //表示するスライドの数
    slidesToScroll: 1, //スクロールで切り替わるスライドの数
    prevArrow: '<button class="slide-arrow slick-prev"></button>',
    nextArrow: '<button class="slide-arrow slick-next"></button>',
  });
});