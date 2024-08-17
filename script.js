document.querySelector(".card").addEventListener("mouseover", function () {
  document.querySelector(".arrow").style.transform = "rotate(180deg)";
});

document.querySelector(".card").addEventListener("mouseout", function () {
  document.querySelector(".arrow").style.transform = "rotate(0deg)";
});
