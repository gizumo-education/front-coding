import $ from "jquery";
import "slick-carousel";

$(function () {
  console.log("環境構築完了");

  $(".slide-items").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
