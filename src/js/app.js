import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');

  $('.l-header__hamburger').on('click', activeBtn);
  let state = false;
  let scroll;
    function activeBtn() {
      $('.l-header__open-line').toggleClass('is-active');
      $('.l-header__slidedown').stop().toggleClass('toggle-scroll');
      if (state == false) {
        scroll = $(window).scrollTop();
        $('body').addClass('is-fixed').css({'top': -scroll});
        state = true;
      } else {
        $('body').removeClass('is-fixed').css({'top': 0});
        window.scrollTo(0,scroll);
        state = false;
      }
  };

  $('a[href^="#"]').on('click', hideMenu);
  const headerHeight = $('.l-header').outerHeight();
  const speed = 500;
    function hideMenu() {
      $('.l-header__open-line').removeClass('is-active');
      $('.l-header__slidedown').removeClass('toggle-scroll');
      $('body').removeClass('is-fixed').css({'top': 0});
      window.scrollTo(0,scroll);
      const href= $(this).attr("href");
      const target = $(href == "#" || href == "" ? 'html' : href);
      const position = target.offset().top - headerHeight;
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
