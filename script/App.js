window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

const imgContainer = document.querySelectorAll(".hero__right__container");
const heroRight = document.querySelectorAll(".hero__right");

console.log(imgContainer);

imgContainer.forEach((img) => {
  img.addEventListener("mouseover", () => {
    for (let i = 0; i < imgContainer.length; i++) {
      imgContainer[i].classList.add("hero__right__container-hover");
    }
  });
  img.addEventListener("mouseleave", () => {
    for (let i = 0; i < imgContainer.length; i++) {
      imgContainer[i].classList.remove("hero__right__container-hover");
    }
  });
});
