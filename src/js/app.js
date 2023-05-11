import $ from "jquery";

$(function() {
  console.log('環境構築完了');
})

$('#js-hamburger').on('click', () => {
  console.log('clicked!')
  $('#js-hamburger').toggleClass("active");
  $('#js-hamburger__items').toggleClass("active");
  $('body').toggleClass("active");
});
