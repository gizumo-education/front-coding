import $ from "jquery";

$(function() {
  console.log('環境構築完了');
})

window.onload = function () {
  const hamburger = document.getElementById('hamburger');
  const hamburgerLine = hamburger.querySelectorAll('span');
  const spMenu = document.getElementById('spMenu');

  hamburger.addEventListener('click', function () {
    spMenu.classList.toggle('open');
    hamburgerLine.classList.toggle('open');
  });
};

// new Splide( '.splide' ).mount()