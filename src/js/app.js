import $ from "jquery";

$(function () {
  console.log('環境構築完了');
})




const hamburger = document.querySelector('.l-header__hamburger');


const headNav = document.querySelector('#js-nav');


hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains("is-active")) {
    hamburger.classList.remove('is-active');

    headNav.classList.remove('is-active')

  } else {
    hamburger.classList.add('is-active');

    headNav.classList.add('is-active')
  }


  headNav.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    headNav.classList.remove('is-active')
  });

});


// const left = document.querySelector('.p-jobslist__arrow-left');

// const right = document.querySelector('.p-jobslist__arrow-right');

// right.addEventListener('click', () => {
//   if

// });

// $('.p-jobslist__arrow-left').slick();

