import $ from "jquery";

$(function() {
  console.log('環境構築完了');

  $('.l-header__hamburger').on('click', menuClick);
  
  function menuClick() {
    let className = document.getElementById("header__menu").className;
    if(className == "l-header__menu") {
      document.getElementById("header__menu").className = "l-header__menu-display";
    }
    else {
      document.getElementById("header__menu").className = "l-header__menu";
    }
  }

})

