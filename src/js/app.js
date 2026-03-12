import $ from "jquery";

$(function() {
  console.log('環境構築完了');
})

$(function() {
  $('#sp_hamburger').on('click',function(){
    $('#sp_hamburger').toggleClass("open");
    $('#sp_nav_menu').slideToggle();
  });
});