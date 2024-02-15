import $ from "jquery";

// ハンバーガーメニュー
$(function () {
  const ham = document.querySelector('.l-header__hamburger');
  const nav = document.querySelector('.l-header__sp-nav');

  ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
    console.log('aaa')

    if ($('body').css('overflow') === 'hidden') {
      $('body').css({ overflow: '' });
    } else {
      $('body').css({ overflow: 'hidden' });
    }

  });
});