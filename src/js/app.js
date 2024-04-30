import $ from "jquery";
import 'slick-carousel'


$(function () {
  $('#slider').slick({
    arrows: true,
  });
});

document.querySelector('.l-header__hamburger').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.l-header__hamburger_menu').classList.toggle('active');
});


$('#hamburger_menu a[href*="#"]').click(function () {

});







