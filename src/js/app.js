import $ from "jquery";
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$(window).on('load', function() {
  const $slider = $('.p-job__new-job');
  
  $slider.slick({
    dots: true,
    arrows: false, 
    slidesToShow: 4,
    infinite: true, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '0px'
        }
      }
    ]
  });

  $(document).on('click', '.p-job__arrow.left', function () {
  console.log($slider.slick('getSlick'));
  $slider.slick('slickPrev');
});

$(document).on('click', '.p-job__arrow.right', function () {
  console.log($slider.slick('getSlick'));
  $slider.slick('slickNext');
});

});
