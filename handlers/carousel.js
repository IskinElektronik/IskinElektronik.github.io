const carousel = document.querySelector("#carousel-images div");
const totalImages = carousel.children.length;
let index = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalImages;
  updateCarousel();
}

function prevSlide() {
  index = (index - 1 + totalImages) % totalImages;
  updateCarousel();
}

document.getElementById("next").addEventListener("click", () => {
  nextSlide();
  resetAutoplay();
});

document.getElementById("prev").addEventListener("click", () => {
  prevSlide();
  resetAutoplay();
});

let autoplay = setInterval(nextSlide, 3000);

function resetAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(nextSlide, 3000);
}
