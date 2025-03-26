import $ from "jquery";
import "slick-carousel";

$(function() {
  $('.l-header__hamburger').click(function() {
    $('.c-hamMenu').toggleClass('open');
    $('.l-header__hamburger').toggleClass('active');
    $('body').toggleClass('ham_hidden');
    $('.c-hamMenu a[href]').on('click', function(event) {
      $('.l-header__hamburger').trigger('click');
    });
  });
  

  $('.p-recruit__container__slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="c-prev-arrow"></div>',
    nextArrow: '<div class="c-next-arrow"></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  });
});





