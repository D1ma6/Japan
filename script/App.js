const imgContainer = document.querySelectorAll(".hero__right__container");

// event listeners
window.addEventListener("load", loadOn());

function loadOn() {
  setInterval(() => {
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
  }, 0);
}

imgContainer.forEach((img) => {
  img.addEventListener("mouseover", () => {
    for (let i = 0; i < imgContainer.length; i++) {
      imgContainer[i].classList.add("hero__right__container-hover");

      img.style.zIndex = "3";
      img.children[0].style.clipPath =
        "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    }
  });

  img.addEventListener("mouseleave", () => {
    for (let i = 0; i < imgContainer.length; i++) {
      imgContainer[i].classList.remove("hero__right__container-hover");
      img.children[0].style.clipPath = "";

      img.style.zIndex = "1";
    }
  });
});
