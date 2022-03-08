/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
$(document).ready(function () {
  if (screen.width < 1114) {
    $(".navbar").css("background", "#2413be");
  } else {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 200) {
        $(".navbar").css("background", "#2413be");
        $(".navbar").css(
          "box-shadow",
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        );
      } else {
        $(".navbar").css("background", "none");
        $(".navbar").css("box-shadow", "none");
      }
    });
  }

  console.log(screen.width);
});
