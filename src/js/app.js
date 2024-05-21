import $ from "jquery";

$(function() {
  console.log('環境構築完了');
});

var swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 4,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
