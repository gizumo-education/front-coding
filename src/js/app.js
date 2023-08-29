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
      $(".p-menue").animate({'marginLeft':'400px'},300).addClass('on');
    }else{
      $(".p-menue").addClass('off');
      $(".p-menue").animate({'marginLeft':'0px'},300);
    }
  });
});

$(function(){
  var state = false;
  var pos;
  $(".l-header__hamburger").on("click", function() {
    if (state == false) {
      pos = $(window).scrollTop();
      $("body").addClass("fixed").css({"top": -pos});
      state = true;
    } else {
      $("body").removeClass("fixed").css({"top": 0});
      window.scrollTo(0, pos);
      state = false;
    }
  });
});

$(function(){
  $('a[href^="#"]').on("click", function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust - 70;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});