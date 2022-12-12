import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');

  $('.l-header__hamburger').on('click', menuClick);

  $('a[href^="#"]').on('click', function(){
    //スクロールのスピード
    let speed = 500;
    //リンク元を取得
    let href= $(this).attr('href');
    //リンク先を取得
    let target = $(href == '#' || href == '' ? 'html' : href);
    //リンク先までの距離を取得
    let position = target.offset().top;
    //スムーススクロール
    $('html, body').animate({scrollTop:position}, speed, 'swing');
    menuClick();
    return false;
  });
  
  function menuClick() {
    $('.l-header__hamburger-border').toggleClass('l-header__hamburger-border-clicked');
    $('.p-hamburger__menu').toggleClass('p-hamburger__menu-display');
    if($('#hamburger__menu').attr('class') == 'p-hamburger__menu') {
      $('.is-pined').css('overflow','auto');
    }
    else {
      $('.is-pined').css('overflow','hidden');
    }
  }

  $(function() {
    $('.p-newest__list').slick({
      infinite: true,
      autoplay: true,
      arrows: true,
      dots: false,
      autoplaySpeed: 3000,
      speed: 1600,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.p-newest__left'),
      nextArrow: $('.p-newest__right'),
      responsive:[{
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
        }
      }],
    });
  });

})

