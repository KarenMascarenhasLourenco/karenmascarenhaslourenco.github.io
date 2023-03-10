const carousel = document.querySelector(".carousel");
const container = document.querySelector(".carousel-container");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");
const slides = Array.from(document.querySelectorAll(".carousel .image-pack"));
const spanSlide = Array.from(document.querySelectorAll('.span-carousel'));

let currentSlide = 0;

function prevSlide() {
  spanSlide[currentSlide].classList.toggle("span-active");
  slides[currentSlide].classList.toggle("no-show");
  currentSlide -= 1;
  if (currentSlide >= slides.length) {
    currentSlide = (slides.length - 1);
  }
  slides[currentSlide].classList.toggle("no-show");
  spanSlide[currentSlide].classList.toggle("span-active");
}

function nextSlide() {
  spanSlide[currentSlide].classList.toggle("span-active");
  slides[currentSlide].classList.toggle('no-show');
  currentSlide += 1;
  if (currentSlide >= slides.length){
    currentSlide = 0;
  }
  slides[currentSlide].classList.toggle("no-show");
  spanSlide[currentSlide].classList.toggle("span-active");
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
setInterval(nextSlide,4000)