import $ from "jquery";
import "slick-carousel";

$('.slider').slick({
  slider: $('.p-news__container-box'),
  autoplay: false,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 4,//スライドを画面に●枚見せる
  slidesToScroll: 1,//1回のスクロールで●枚の写真を移動して見せる
  arrows: true,
  prevArrow: $('.p-news__container__left'),//矢印部分PreviewのHTMLを変更
  nextArrow: $('.p-news__container__right'),//矢印部分NextのHTMLを変更
  dots: false,//下部ドットナビゲーションの表示
  responsive: [
    {
      breakpoint: 767,//モニターの横幅が●px以下の見せ方
      settings: {
        slidesToShow: 1,//スライドを画面に●枚見せる
        slidesToScroll: 1,//1回のスクロールで●枚の写真を移動して見せる
      }
    }
  ]
});