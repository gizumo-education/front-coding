import $ from "jquery";

$(function () {
  $("#hamburger").on("click", function () {
    $("#nav").toggleClass("is-active");
  });
});
