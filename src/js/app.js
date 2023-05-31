import $ from "jquery";

$(function() {
  console.log('環境構築完了');

  var authenticity = false;

  $('.c-hamburger').click(function() {
    $('.c-hamburger__patty').toggleClass('active');
    $('.p-contentsLink').toggleClass('active');

  });
});