import $ from "jquery";
import "slick-carousel"


$(function() {
  $('.p-joblistings__job-openings').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slide-arrow prev-arrow"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"></div>',
    responsive: [
      {
        breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
      }
    ]
  })
  $(function(){
    $('.l-header__hamburger').on("click",function(){
      $('.l-header__hamburger, .l-header__slide-menu').toggleClass('active');
    });
  });
})

$(function () {
  $(".l-header__hamburger").on("click",function () {
    if ($("body").css("overflow") === "hidden") {

      $("body").css({ height: "", overflow: "" });
   
    } else {
      $("body").css({ height: "100%", overflow: "hidden" });

    }
  });
});

$(function() {
  $('#"l-header__nav').on('click', function(event) {
    $('#nav-input').prop('checked', false);
  });
});