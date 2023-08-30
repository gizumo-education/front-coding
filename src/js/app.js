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

$(function () {
  $(".l-header__hamburger").on("click", function() {
    if($(".p-menue").hasClass('off')){
      $(".p-menue").removeClass('off');
      $(".p-menue").animate({'marginLeft':'-8rem'},300).addClass('on');
    }else{
      $(".p-menue").addClass('off');
      $(".p-menue").animate({'marginLeft':'0px'},300);
    }
  });
});

$(function () {
  $(".l-header__hamburger").on("click", function() {
    $(this).toggleClass("active");
    $(".p-menue").toggleClass("active");
    $("body").toggleClass("active");
  });
});


$(function(){
  $('a[href^="#"]').on("click", function(){
    const adjust = 0;
    const speed = 400;
    const href= $(this).attr("href");
    const target = $(href === "#" || href === "" ? 'html' : href);
    const position = target.offset().top + adjust - 70;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    $(".p-menue").addClass('off');
    $(".p-menue").animate({'marginLeft':'0px'},300);
    $(".l-header__hamburger").toggleClass("active");
    $(".p-menue").toggleClass("active");
    $("body").toggleClass("active");
    return false;
  });
});