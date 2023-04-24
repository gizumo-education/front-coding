import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');

  $('.l-header__hamburger').on('click', activeBtn);
  let state = false;
    function activeBtn() {
      $('.l-header__open-line').toggleClass('is-active');
      $('.l-header__slidedown').stop().toggleClass('toggle-scroll');
      let scroll = $(window).scrollTop();
      if (state == false) {
        $('body').addClass('is-fixed').css({'top': -scroll});
        state = true;
      } else {
        $('body').removeClass('is-fixed').css({'top': 0});
        state = false;
      }
  };

  $('a[href^="#"]').on('click', hideMenu);
  let headerHeight = $('.l-header').outerHeight();
  let speed = 0;
    function hideMenu() {
      $('.l-header__open-line').removeClass('is-active');
      $('.l-header__slidedown').removeClass('toggle-scroll');
      $('body').removeClass('is-fixed').css({'top': 0});
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top - headerHeight;
      $('html, body').stop().animate({scrollTop:position}, speed, "swing");
      state = false;
      return false;
  }

  $('.p-job__lists').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
})
