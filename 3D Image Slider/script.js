let span = document.querySelector(".spn");
let black = document.querySelector(".black");
let img = document.querySelector(".img");
let images = document.querySelectorAll(".images");

images.forEach((item) => {
  item.addEventListener("click", () => {
    img.src = `./img/dragon_${item.dataset.id}.jpg`;
    black.style.opacity = 1;
    black.style.zIndex = 1;
  });
});

black.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") 0;
  else black.style.opacity = black.style.zIndex = -1;
});
