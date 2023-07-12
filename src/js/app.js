import $ from "jquery";
import "slick-carousel";

$(function() {
  //console.log('環境構築完了');
  
  $('.l-header__toggle').on('click', function(){
    $(this).toggleClass('is-active');
    $('.nav_content').toggleClass('is-open');
    $("body").toggleClass('no-scroll')
  });

  $('a[href*="#"]').on('click', function(){
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? "html" : href);
    const position = target.offset().top;
    $("body,html").animate({ scrollTop: position - 70});
    return;
  });

const slidesToShowNum = 4;
const item = $('.p-news-images__image').length;
if (item <= slidesToShowNum) {
  for (let i = 0; i <= slidesToShowNum + 1 - item ; i++) {
    $('.p-news-images__image:nth-child('+ i + ')').clone().appendTo('.p-news-images__group');
  }
}
  $('.p-news-images__group').slick({
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    slidesToShow: slidesToShowNum,
    swipe: false,
    arrows: true,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover:false,

    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });
})
