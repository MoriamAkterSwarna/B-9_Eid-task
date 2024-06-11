const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentIndex = 0;

function goToSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function showPrevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  goToSlide(currentIndex);
}

function showNextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  goToSlide(currentIndex);
}

prevBtn.addEventListener("click", showPrevSlide);
nextBtn.addEventListener("click", showNextSlide);
