import $ from "jquery";
import 'slick-carousel';

$(function() {
console.log('環境構築完了');
})



// スムーススクロール
// $('.p-carousel__main').slick({
//   dots: true,
//  });


// ハンバーガーメニュー
$(function(){
  $('.l-header__hamburger').click(function(){
    $('.l-header__hamburger, .l-header__menu').toggleClass('active');
  });
});



// カルーセル
$('#page-link a[href*="#"]').click(function () {
  //全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
  var elmHash = $(this).attr('href');
  //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top;
  //idの上部の距離を取得
  $('body,html').animate({scrollTop: pos}, 500);
  //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  $('.l-header__menu').toggleClass('active');
  return false;
  // メニューのリンクをクリックしたらページを閉じる
});

