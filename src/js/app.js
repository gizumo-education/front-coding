import $ from "jquery";
import 'slick-carousel';

// ハンバーガーメニュー
$(function () {
  const ham = document.querySelector('.l-header__hamburger');
  const nav = document.querySelector('.l-header__sp-nav');
  const link = document.querySelectorAll('.l-header__sp-nav__link');

  ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    nav.classList.toggle('active');

    if ($('body').css('overflow') === 'hidden') {
      $('body').css({ overflow: '' });
    } else {
      $('body').css({ overflow: 'hidden' });
    }
  });

  link.forEach(function (btn) {
    btn.addEventListener('click', function () {
      ham.classList.toggle('active');
      nav.classList.toggle('active');

      if ($('body').css('overflow') === 'hidden') {
        $('body').css({ overflow: '' });
      } else {
        $('body').css({ overflow: 'hidden' });
      }
    });
  });
});

  // ページ内スクロール
  $(function () {
    $('a[href^="#"]').on('click', function () {
      const speed = 500;
      const href = $(this).attr("href");
      const target = $(href === "#" || href === "" ? "html" : href);
      const position = target.offset().top;
      $("body,html").animate({ scrollTop: position }, speed, "swing");
      return false;
    });
  });


  // カルーセル
  $(function () {
    $('.slick-carousel').slick({
      swipeToSlide: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        }
      ],
    });
  });