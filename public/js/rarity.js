window.onload = function () {
  let btnText = document.querySelector("#btnText");
  let btnHtml = document.querySelector("#btnHtml");
  let txt = document.querySelector(".txt");
  let html = document.querySelector(".html");

  btnText.onclick = function () {
    txt.style.display = "block";
    html.style.display = "none";
    btnText.style.background = "red";
    btnHtml.style.background = "white";
  };

  btnHtml.onclick = function () {
    html.style.display = "block";
    txt.style.display = "none";
    btnText.style.background = "transparant";
    btnHtml.style.background = "red";
  };
};
