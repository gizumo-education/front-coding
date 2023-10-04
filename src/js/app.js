import $ from "jquery";
import "slick-carousel";


$(function() {
  console.log('環境構築完了');
});

// slickの指定
$(".p-newjob__inner__list").slick({//クラスをjQueryで選択し、それに対してSlickを初期化
  adaptiveHeight: true,//各スライドの高さを調整するかの指定→trueで、各スライドの高さを合わせる
  variableWidth: true,//各スライドの幅を調整するかの指定→trueで、各スライドの幅を合わせる
  prevArrow: "<button type=button class=slick-prev></button>",//進むボタンのカスタム指定。html要素として指定されており、slick-prevクラスを持つボタンに対し、進むボタンが適応される。
  nextArrow: "<button type=button class=slick-next></button>",//戻るボタンのカスタム指定。html要素として指定されており、slick-nextクラスを持つボタンに対し、戻るボタンが適応される
  speed: 500,//スライドトランジション(アニメーション)の速さ指定
  slidesToShow: 1,//1つずつズレる
});


//ハンバーガークリックしたらXになる
$(".l-header__hamburger").on("click", function () {
  $("body").toggleClass("is-open");
  $(".l-header__nav-content").toggleClass("is-open");
});

// aタグをクリックした時のトリガー設定
$(".l-header__menu-item a").on("click", function () {// ".l-header__menu-item a"というセレクタにマッチする要素（l-header__menu-itemクラスを持つ要素の子孫でa要素）がクリックされたとき
  $(".l-header__hamburger").trigger("click");// ".l-header__toggle-box"というセレクタにマッチする要素のクリックイベントをトリガーする
});




$('a[href^="#"]').on("click", function () {// クリックイベント(a タグの href 属性が # で始まる要素で条件指定している)を設定
  const speed = 400;// アニメーションの速さ
  const href = $(this).attr("href");// クリックされたリンク(＝<a>タグ) の href 属性を取得
  // return;// イベントのデフォルト動作を阻止（通常のリンク遷移を防ぐ）
  // クリックされたリンクがページ内リンクであることを確認
  if (href.startsWith("#")) {
    // ページ内スクロールのための処理

    // 対象要素を取得(=リンク先が ”#” または,余白部分の場合→ページ上部を対象とする)
    const target = $(href === "#" || href === "" ? "html" : href);

  }
});
