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

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    console.log("berhasil");
  };

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
});
