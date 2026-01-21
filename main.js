const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 }); // Se activa cuando se ve el 10% del elemento

  // Seleccionamos todo lo que queremos animar
  document.querySelectorAll('section, .card, .benefit-item').forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
});
