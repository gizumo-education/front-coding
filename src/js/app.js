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

const ham = document.querySelector(".l-header__hamburger");
const nav = document.querySelector(".l-header__sp-nav");
const body = document.querySelector("body");

ham.addEventListener("click", function () {
  body.classList.toggle("active");
  nav.classList.toggle("active");
  ham.classList.toggle("active");
});
