import $ from "jquery";

$(function () {
  console.log('環境構築完了');

  $(function () {
    $('a[href^="#"]').on('click', function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 150;
      $('body,html').animate({ scrollTop: position }, 400, 'swing');
      return false;
    });
  });
});