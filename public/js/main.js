/* eslint-disable no-undef */
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar").css("background", "black");
      $(".navbar").css(
        "box-shadow",
        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
      );
    } else {
      $(".navbar").css("background", "none");
      $(".navbar").css("box-shadow", "none");
    }
  });
});
