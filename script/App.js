const imgContainer = document.querySelectorAll(".hero__right__container");

// event listeners
window.addEventListener("load", loadOn());

function loadOn() {
  setInterval(() => {
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
  }, 2000);
}

imgContainer.forEach((img) => {
  img.addEventListener("mouseover", () => {
    for (let i = 0; i < imgContainer.length; i++) {
      imgContainer[i].classList.add("hero__right__container-hover");
      img.style.overflow = "visible";
    }
  });
  img.addEventListener("mouseleave", () => {
    for (let i = 0; i < imgContainer.length; i++) {
      imgContainer[i].classList.remove("hero__right__container-hover");
      img.style.overflow = "hidden";
    }
  });
});
