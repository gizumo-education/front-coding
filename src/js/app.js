import $ from "jquery";

$(function() {
  console.log('環境構築完了');

  $('.l-header__hamburger').on('click', menuClick);

  $('a[href^="#"]').on('click', function(){
    //スクロールのスピード
    let speed = 500;
    //リンク元を取得
    let href= $(this).attr("href");
    //リンク先を取得
    let target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    let position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
  
  function menuClick() {
    console.log('click');
    let className = document.getElementById("hamburger__menu").className;
    if(className == "p-hamburger__menu") {
      document.getElementById("hamburger__menu").className = "p-hamburger__menu-display";
    }
    else {
      document.getElementById("hamburger__menu").className = "p-hamburger__menu";
    }
  }

})

