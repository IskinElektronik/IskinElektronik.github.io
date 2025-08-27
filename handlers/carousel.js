const carousel = document.querySelector("#carousel-images div");
const totalImages = carousel.children.length;
let index = 0;
let autoplay;

// Create dot navigation
const dotsContainer = document.createElement("div");
dotsContainer.className = "flex justify-center mt-4 space-x-2";
document.querySelector("#carousel").appendChild(dotsContainer);

for (let i = 0; i < totalImages; i++) {
  const dot = document.createElement("button");
  dot.className = "w-3 h-3 rounded-full bg-gray-400 hover:bg-blue-600 transition";
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
    resetAutoplay();
  });
  dotsContainer.appendChild(dot);
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll("button");
  dots.forEach((dot, i) => {
    dot.className =
      "w-3 h-3 rounded-full transition " +
      (i === index ? "bg-blue-600" : "bg-gray-400 hover:bg-blue-600");
  });
}

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function nextSlide() {
  index = (index + 1) % totalImages;
  updateCarousel();
}

function prevSlide() {
  index = (index - 1 + totalImages) % totalImages;
  updateCarousel();
}

// Buttons
document.getElementById("next").addEventListener("click", () => {
  nextSlide();
  resetAutoplay();
});
document.getElementById("prev").addEventListener("click", () => {
  prevSlide();
  resetAutoplay();
});

// Autoplay
function startAutoplay() {
  autoplay = setInterval(nextSlide, 4000);
}
function resetAutoplay() {
  clearInterval(autoplay);
  startAutoplay();
}
startAutoplay();

// Pause on hover
const carouselWrapper = document.querySelector("#carousel-images");
carouselWrapper.addEventListener("mouseenter", () => clearInterval(autoplay));
carouselWrapper.addEventListener("mouseleave", resetAutoplay);

// Keyboard shortcut
document.addEventListener("keydown", function (event) {
  if (event.key === "i") {
    window.location.href = "ostam.html";
  }
});

// Initialize first state
updateCarousel();
