import $ from "jquery";

$(function() {
  console.log('環境構築完了');
})

$(function(){
  
  $(".l-header__wrapper").click(function() {
      $(this).toggleClass("l-header__close");
  });

});