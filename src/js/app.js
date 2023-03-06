import $ from "jquery";

// $(function() {
//   console.log('環境構築完了');

//   // 無限スライダー
//   $('.slider').flickity({
//     // options
//     cellAlign: 'left',
//     contain: true
//   });
// })

// SPナビメニュー表示
const ham = document.querySelector('#ham');
const menu = document.querySelector('#menu');
ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  menu.classList.toggle('active');
});

// ページ内リンク
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++){
  smoothScrollTrigger[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    let targetElement = document.getElementById(href.replace('#', ''));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 90;
    const target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
    ham.classList.toggle('active');
    menu.classList.toggle('active');
  });
}
