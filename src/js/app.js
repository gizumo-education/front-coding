import $ from 'jquery';

$(function () {
  // console.log('環境構築完了');
  $('.c-hamburger').on('click', function () {
    $(this).toggleClass('js-active');
    $('.l-header__nav__list--sp').toggleClass('js-active');
    
    // スクロールロックのトグル処理
    if ($('body').css('overflow-y') === 'visible') {
      $('body').css('overflow-y', 'hidden');
    } else {
      $('body').css('overflow-y', 'visible');
    }

    // 
  });
});
