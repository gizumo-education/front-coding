import $ from "jquery";
import 'slick-carousel';

$(function() {
  console.log('環境構築完了');
  $('#js-hamburger').click(function() {
    $(this).toggleClass('active')
    $('#js-nav').toggleClass('active')
    $('#js-noScroll').toggleClass('active')
    $('#js-removeMenu').click(function() {
      $('#js-hamburger').removeClass('active')
      $('#js-nav').removeClass('active')
      $('#js-noScroll').removeClass('active')
    })
  })
  $('#js-slider').slick({
    autoplay: true,
    speed: 700,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })
})

