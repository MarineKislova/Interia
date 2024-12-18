import Swiper from "./modules/swiper-bundle.js";

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Header slider
  const swiperHeader = new Swiper(".header__slider", {
    loop: true,
    simulateTouch: false,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: false,
      dynamicBullets: true,
    },

    // Autoplay
    autoplay: {
      delay: 1700,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    },

    speed: 700,
  });


  // section 7 slider
  const swiperSectionSeven = new Swiper(".section-seven", {
    loop: true,
    simulateTouch: false,
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,

    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10, slidesPerGroup: 1 },
      425: { slidesPerView: 2, spaceBetween: 10, slidesPerGroup: 2 },
      768: { slidesPerView: 3, spaceBetween: 10, slidesPerGroup: 2 },
      1024: { slidesPerView: 4, spaceBetween: 10, slidesPerGroup: 4 },
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Burger Menu
  const btnBurger = document.querySelector(".burger-menu__btn");
  btnBurger.addEventListener("click", function () {
    this.classList.toggle("active");
    if (btnBurger.classList.contains("active")) {
      btnBurger.style.backgroundColor = "#5d5656";
      btnBurger.style.color = "#efa8a8";
      btnBurger.style.maxWidth = 100 + "px";
      btnBurger.style.borderTopLeftRadius = 10 + "px";
      btnBurger.style.borderBottomLeftRadius = 10 + "px";
    
    } else if (!btnBurger.classList.contains("active")){
      btnBurger.style.backgroundColor  = "inherit";
      btnBurger.style.color = "inherit";
    }
    document.querySelector(".burger-menu__links").classList.toggle("open");
  });
});
