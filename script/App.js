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

const countryContainer = document.querySelector(".visit__place__country");
const countryImg = document.querySelector(".visit__place__country__img");

countryContainer.addEventListener("click", () => {
  countryImg.style.transform = "scale(1.2)";
  countryImg.style.transition = "transform 0.4s ease-in-out";
  countryImg.style.zIndex = "10";
  countryImg.style.position = "relative";
});
countryContainer.addEventListener("mouseleave", () => {
  countryImg.style.transform = "scale(1)";
  countryImg.style.zIndex = "1";
});

const restaurantImg = document.querySelectorAll(
  ".restaurant__visit__place__container__img"
);

restaurantImg.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.transform = "scale(1.3)";
    item.style.transition = "transform 0.4s ease-in-out";
  });
  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
  });
});

const restaurantSlide = document.querySelector(".monuments");
const restaurantSection = document.querySelector(".monuments__container");

const restaurantBtn = document.querySelector(".monuments__btn");

let counter = 1;
