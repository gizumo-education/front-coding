import $ from "jquery";

$(function() {
  console.log('環境構築完了');

  $('.l-header__hamburger').on('click', menuClick);
  
  function menuClick() {
    console.log('click');
    let className = document.getElementById("hamburger__menu").className;
    if(className == "p-hamburger__menu") {
      document.getElementById("hamburger__menu").className = "p-hamburger__menu-display";
    }
    else {
      document.getElementById("hamburger__menu").className = "p-hamburger__menu";
    }
  }

})

