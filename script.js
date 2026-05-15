const langBtns = document.querySelectorAll('.lang-btn');

langBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});