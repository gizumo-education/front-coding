import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
})

$(function() {
  //ハンバーガーボタン⇨メニュースクロール
  $('.l-header__hamburger').on('click', function() {
    $('.l-header__hamburger').toggleClass('open-btn');
    $('.header-nav').toggleClass('open-menu');
    
    if ($("body").css("overflow") === "hidden") {
      $("body").css({ height: "", overflow: "" });
    } else {
      $("body").css({ height: "100%", overflow: "hidden" });
    }
  });

  //SPページ内リンク遷移
  $(function(){
    $('a[href^="#"]').on('click', function(){
      var adjust = -80;
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });
});

//スライダー

$(function () {
  $('.slick-recruitment').slick({
    prevArrow: '<img src="./img/icon/news-page-arrow.png" alt="スクロールボタン左矢印" class="p-scloll__size"></img>',
    nextArrow: '<img src="./img/icon/news-page-arrow.png" alt="スクロールボタン左矢印" class="p-scloll__size__second"></img>',
    slidesToShow: '4',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
        slidesToShow: 4,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 767,
        settings: {
        slidesToShow: 1,
        },
      },
    ],
  });
});