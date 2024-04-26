import $ from "jquery";

$(function() {

});

document.querySelector('.l-header__hamburger').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.l-header__hamburger_menu').classList.toggle('active');
});




