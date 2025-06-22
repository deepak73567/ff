let slides = document.getElementsByClassName("slides");
let navlinks = document.getElementsByClassName("dot");
let currentSlide = 0;

// Show next slide
document.getElementById("next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});

// Show previous slide
document.getElementById("prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

// Change slide function
function changeSlide(moveTo) {
  if (moveTo >= slides.length) moveTo = 0;
  if (moveTo < 0) moveTo = slides.length - 1;

  // Remove current
  slides[currentSlide].classList.remove("active");
  navlinks[currentSlide].classList.remove("activeDot");

  // Add new
  slides[moveTo].classList.add("active");
  navlinks[moveTo].classList.add("activeDot");

  currentSlide = moveTo;
}

// Dot click
document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    if (currentSlide !== index) {
      changeSlide(index);
    }
  });
});

// Auto change every 3 seconds
setInterval(() => {
  changeSlide(currentSlide + 1);
}, 3000);
