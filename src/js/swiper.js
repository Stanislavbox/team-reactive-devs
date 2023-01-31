var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.3,
      spaceBetween: 24,
      loop: true,

      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        }
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      // slideToClickedSlide: true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });