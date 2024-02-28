import $ from "jquery";

$(function() {
  console.log('環境構築完了');
})

$(function() {
  $('a').hover(function() {
    $(this).animate({"opacity": 0.8});
  },function() {
    $(this).animate({"opacity": 1});
  });

})
