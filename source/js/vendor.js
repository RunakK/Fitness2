// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

const trainerSlider = document.querySelector('.trainers__wrapper');
const reviewSlider = document.querySelector('.swiper-reviews');

const runTrainersSlider = () => {
  if (trainerSlider) {
    const swiper = new Swiper(trainerSlider, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,

      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // Navigation arrows
      navigation: {
        nextEl: '.trainers__button-next',
        prevEl: '.trainers__button-prev',
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }
};

const runReviewSlider = () => {
  if (reviewSlider) {
    const swiperReviews = new Swiper('.swiper-reviews', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,

      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-reviews__next',
        prevEl: '.swiper-reviews__prev',
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 150,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 1,
          spaceBetween: 150,
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 1,
          spaceBetween: 150,
        },
      },

    });
  }
};

export {runTrainersSlider, runReviewSlider};
