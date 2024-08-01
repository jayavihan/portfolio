window.addEventListener('scroll', function() {
  const carIcon = document.getElementById('car-icon');
  const scrollPosition = window.scrollY;
  const maxTranslateX = 900; // Maximum translation value in pixels
  const translateX = Math.min(scrollPosition / 0.8, maxTranslateX); // Slow down and limit the translation

  carIcon.style.transform = `translateX(${translateX}px)`;
});

document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
      behavior: 'smooth'
    });
  });
});