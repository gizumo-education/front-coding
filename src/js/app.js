import $ from "jquery";
import "slick-carousel"

$(function() {
  $('.p-joblistings__job-openings').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slide-arrow prev-arrow"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"></div>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  })
  $('.l-header__hamburger').on("click",function(){
    $('.l-header__hamburger, .l-header__slide-menu').toggleClass('active');
    
    if($(this).hasClass('active')) {
      $('html').toggleClass('no-scroll');
    } else {
      $('html').removeClass('no-scroll');
    }
  })
})

