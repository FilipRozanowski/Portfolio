const langBtns = document.querySelectorAll('.lang-btn');

langBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

const tabBtns = document.querySelectorAll('.tab_btn');
const panels = document.querySelectorAll('.project_panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.project;

        tabBtns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        document.querySelector(`.project_panel[data-project="${target}"]`).classList.add('active');
    });
});