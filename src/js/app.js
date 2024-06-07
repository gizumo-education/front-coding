import $ from "jquery";
import 'slick-carousel'

$(function() {
  $('#jobs-slider').slick()
})

const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function() { 
  ham.classList.toggle('active'); 
  nav.classList.toggle('active');
});