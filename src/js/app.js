import $ from "jquery";

$(function () {
  $("#hamburger").on("click", function () {
    $("#nav").toggleClass("is-active");
    $("#span1").toggleClass("span1");
    $("#span2").toggleClass("span2");
    $("#span3").toggleClass("span3");
    $("#body").toggleClass("fixed");
  });
  $(".p-nav__item__link").on("click", function () {
    $("#nav").removeClass("is-active");
    $("#span1").removeClass("span1");
    $("#span2").removeClass("span2");
    $("#span3").removeClass("span3");
    $("#body").removeClass("fixed");
  });
});
