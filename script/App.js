window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

const imgContainer = document.querySelectorAll(".hero__right__container");
const heroRight = document.querySelectorAll(".hero__right");

heroRight.forEach((item) => {
  imgContainer.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.classList.toggle("hero__right__container-hover");
    });
    img.addEventListener("mouseleave", () => {
      img.classList.toggle("hero__right__container-hover");
    });
  });
});
