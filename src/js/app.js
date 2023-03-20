import $ from 'jquery';

$(function () {
  // console.log('環境構築完了');
  $('.c-hamburger').on('click', function () {
    $(this).toggleClass('js-active');
    $('.l-header__nav__list--sp').toggleClass('js-active');
    // スクロールロックのトグル処理
    if ($('html').css('overflow-y') === 'visible') {
      $('html').css('overflow-y', 'hidden');
    } else {
      $('html').css('overflow-y', 'visible');
    }
  });
});
