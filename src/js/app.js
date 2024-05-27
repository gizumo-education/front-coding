import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');

  //ハンバーガーボタン⇨メニュースクロール
  $('.l-header__hamburger').on('click', function() {
    $('.l-header__hamburger').toggleClass('open-btn');
    $('.header-nav').toggleClass('open-menu');
    
    if ($('body').css('overflow') === 'hidden') {
      $('body').css({ height: '', overflow: '' });
    } else {
      $('body').css({ height: '100%', overflow: 'hidden' });
    }
  });

  //SPページ内リンク遷移
  $('a[href^="#"]').on('click', function(){
    const adjust = -80;
    const speed = 400;
    const href= $(this).attr('href');
    const target = $(href == '#' || href == '' ? 'html' : href);
    const position = target.offset().top + adjust;
    $('body,html').animate({ scrollTop:position }, speed, 'swing');
    return false;
  });

  //スライダー
  $('.slick-recruitment').slick({
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

})