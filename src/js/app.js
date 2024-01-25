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

  $('a[href^="#"]').click(function () {
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top;
    const speed = 500;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
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

const links = document.querySelectorAll(".l-header__sp-nav__link");

links.forEach((link) => {
  link.addEventListener("click", function () {
    body.classList.toggle("active");
    nav.classList.toggle("active");
    ham.classList.toggle("active");
  });
});
