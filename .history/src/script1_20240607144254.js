document.addEventListener("DOMContentLoaded", function() {
  const testimonialSlide = document.querySelector(".testimonial-slide");
  let counter = 0;
  const slideCount = document.querySelectorAll(".testimonial").length;
  const slideWidth = document.querySelector(".testimonial").clientWidth;
  const intervalTime = 5000; // Change slide every 5 seconds

  // Function to show next slide
  function nextSlide() {
    counter++;
    if (counter === slideCount) {
      counter = 0;
    }
    slideTestimonial();
  }

  // Function to slide testimonials
  function slideTestimonial() {
    testimonialSlide.style.transform = `translateX(${-counter * slideWidth}px)`;
  }

  // Automatic slide transition
  setInterval(nextSlide, intervalTime);
});
