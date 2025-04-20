const slider = document.querySelector(".customers__card-slider");
const slides = document.querySelectorAll(".customers__card");
const slideButtons = document.querySelectorAll(".button--arrow");
const carousel = document.querySelector(".customers__carousel");
let carouselItems = null;
const OFFSET = 495;
let slideIndex = 0;
let direction = 1;

console.log(slider);

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  slideButtons[0].addEventListener("click", prevSlide);
  slideButtons[1].addEventListener("click", nextSlide);

  for (let i = 0; i < slides.length; ++i) {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("customers__carousel-item");

    carousel.appendChild(carouselItem);
  }

  carouselItems = document.querySelectorAll(".customers__carousel-item");
  carouselItems[0].classList.add("ci-long");
}

function updateCarousel(index) {
  removeCssClass(carouselItems, "ci-long");
  carouselItems[slideIndex].classList.add("ci-long");
}

function removeCssClass(array, cssClass) {
  array.forEach((slide) => {
    slide.classList.remove(`${cssClass}`);
  });
}

function prevSlide() {
  --slideIndex;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
    direction = -1;
  }

  slides.forEach((slide) => {
    slide.style.translate = `${direction * OFFSET * slideIndex}px`;
  });

  updateCarousel(slideIndex);
}

function nextSlide() {
  ++slideIndex;
  direction = 1;

  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }

  slides.forEach((slide) => {
    slide.style.translate = `-${direction * OFFSET * slideIndex}px`;
  });

  updateCarousel(slideIndex);
}
