const swiper = new Swiper('.mySwiper', {
  // オプション設定
  loop: true, // 無限ループ
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // ページネーションのクリックで移動
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000, // 3秒ごとに自動スライド
  },
})
