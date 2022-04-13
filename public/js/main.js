/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
$(document).ready(function () {
  if (screen.width < 1114) {
    $(".navbar").css("background", "#322970");
  } else {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 200) {
        $(".navbar").css("background", "#322970");
        $(".navbar").css(
          "box-shadow",
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        );
      } else {
        $(".navbar").css("background", "#322970");
        $(".navbar").css("box-shadow", "none");
      }
    });
  }

  // countdown
  var countDownDate = new Date("May 8, 2022 20:00:00 UTC").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      $(".mint-btn").css("display", "block");
      $(".countdown").css("display", "none");
      $(".countdown-title").css("display", "none");
    }
  }, 1000);
});
