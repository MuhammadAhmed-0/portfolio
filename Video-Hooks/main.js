// Countdown Timer
function updateCountdown() {
  const now = new Date().getTime();
  const deadline = new Date(now + 12 * 60 * 60 * 1000); // 12 hours from now

  function update() {
    const current = new Date().getTime();
    const remaining = deadline - current;

    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    // Update the first timer
    document.getElementById('hours1').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes1').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds1').textContent = String(seconds).padStart(2, '0');

    // Update the second timer
    document.getElementById('hours2').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes2').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds2').textContent = String(seconds).padStart(2, '0');

    if (remaining < 0) {
      clearInterval(timerInterval);
      document.getElementById('countdown1').innerHTML = '<p>Offer Expired!</p>';
      document.getElementById('countdown2').innerHTML = '<p>Offer Expired!</p>';
    }
  }

  update();
  const timerInterval = setInterval(update, 1000);
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Initialize countdown
updateCountdown();


// Add scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.benefit-card, .price-card, .testimonial').forEach((el) => {
  observer.observe(el);
});