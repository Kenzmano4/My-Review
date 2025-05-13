const reviews = [
    {
      name: "Jason Johnson",
      job: "Web Developer",
      img: "Picz/M 1.jpg",
      text: "This is an amazing service. Highly recommend to everyone looking for quality work."
    },
    {
      name: "Kenny Leonard",
      job: "Graphic Designer",
      img: "Picz/M 2.jpg",
      text: "Very creative and professional. Loved the experience from start to finish!"
    },
    {
      name: "Sarah Kim",
      job: "Project Manager",
      img: "Picz/W 1.jpg",
      text: "They met all deadlines and the quality was excellent. Great communication as well."
    },
    {
      name: "Alice Doe",
      job: "Freelancer",
      img: "Picz/W 2.jpg",
      text: "It was a pleasure working with this team. They understood my vision perfectly."
    }
  ];
  
  let currentIndex = 0;
  let autoplayInterval;
  
  // DOM elements
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  const stars = document.getElementById("stars");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const container = document.getElementById("review-container");
  
  // Load initial review
  window.addEventListener("DOMContentLoaded", () => {
    showReview(currentIndex);
    startAutoplay();
  });
  
  function showReview(index) {
    const review = reviews[index];
    img.src = review.img;
    author.textContent = review.name;
    job.textContent = review.job;
    info.textContent = review.text;
    stars.innerHTML = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
  }
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
    
  });
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
    resetAutoplay();
  });
  
  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % reviews.length;
      showReview(currentIndex);
    }, 5000);
  }
  
  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }
  
  container.addEventListener("mouseenter", () => {
    clearInterval(autoplayInterval);
  });
  
  container.addEventListener("mouseleave", () => {
    startAutoplay();
  });