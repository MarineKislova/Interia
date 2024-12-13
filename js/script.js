import Swiper from "./modules/swiper-bundle.js";

const swiper = new Swiper(".swiper, [first]", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    // dynamicBullets: true,
    // type: "progress-bar",//полоска сверху
    // type: "fraction", // 1/n
  },
});

// setInterval(() => {
//     swiper.slideNext();
// }, 2500);
