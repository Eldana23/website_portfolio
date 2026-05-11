const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.06 });
document.querySelectorAll('.fade').forEach(el => obs.observe(el));
