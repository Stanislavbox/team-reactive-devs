var swiper = new Swiper('.hp-restaurant-slider', {
  slidesPerView: 1,
  spaceBetween: 46,
  slideToClickedSlide: true,

  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    414: {
      slidesPerView: 1.5,
    },
    1024: {
      spaceBetween: 34,
      slidesPerView: 2,
    },
    1280: {
      spaceBetween: 87,
      slidesPerView: 2,
    },
  },
});