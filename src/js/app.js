import $ from "jquery";

$(function () {
  $("#hamburger").on("click", function () {
    $("#nav").toggleClass("is-active");
  });
  $(".p-nav__item__link").on("click", function () {
    $("#nav").removeClass("is-active");
  });
});
