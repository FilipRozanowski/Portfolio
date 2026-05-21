if (typeof emailjs !== 'undefined') emailjs.init('sbVViQV7iH8oE2JZv');

// ─── DOM REFERENCES ───

const langBtns        = document.querySelectorAll('.lang-btn');
const tabBtns         = document.querySelectorAll('.tab_btn');
const projectPanels   = document.querySelectorAll('.project_panel');
const nav             = document.querySelector('nav');
const burgerBtn       = document.getElementById('burger-btn');
const mobileNav       = document.getElementById('mobile-nav');
const mobileLinks     = document.querySelectorAll('.mobile-nav-link');
const contactForm     = document.getElementById('contact_form');
const nameInput       = document.getElementById('contact_name');
const emailInput      = document.getElementById('contact_email');
const messageInput    = document.getElementById('contact_message');
const privacyCheckbox = document.getElementById('privacy');
const sendBtn         = document.getElementById('contact_send');

// ─── STATE ───

let currentLang = localStorage.getItem('lang') || 'en';

// ─── LANGUAGE ───

/**
 * Updates every element carrying a data-i18n attribute to the given language.
 * @param {string} lang - Language code ('en' or 'de').
 */
function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
}

langBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    langBtns.forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`.lang-btn[data-lang="${btn.dataset.lang}"]`)
      .forEach(b => b.classList.add('active'));
    currentLang = btn.dataset.lang;
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
  });
});

if (currentLang !== 'en') {
  langBtns.forEach(b => b.classList.remove('active'));
  document.querySelectorAll(`.lang-btn[data-lang="${currentLang}"]`)
    .forEach(b => b.classList.add('active'));
  applyLanguage(currentLang);
}

// ─── PROJECTS ───

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.project;
    tabBtns.forEach(b => b.classList.remove('active'));
    projectPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector(`.project_panel[data-project="${target}"]`).classList.add('active');
  });
});

// ─── NAV SHADOW ───

window.addEventListener('scroll', () => {
  if (nav) nav.style.boxShadow = window.scrollY > 0 ? '0 4px 20px rgba(0,0,0,0.4)' : 'none';
});

// ─── MOBILE NAV ───

/**
 * Opens the mobile navigation overlay and locks page scroll.
 */
function openMenu() {
  burgerBtn.classList.add('open');
  mobileNav.classList.add('open');
  burgerBtn.setAttribute('aria-expanded', 'true');
  mobileNav.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

/**
 * Closes the mobile navigation overlay and restores page scroll.
 */
function closeMenu() {
  burgerBtn.classList.remove('open');
  mobileNav.classList.remove('open');
  burgerBtn.setAttribute('aria-expanded', 'false');
  mobileNav.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

burgerBtn.addEventListener('click', () => {
  mobileNav.classList.contains('open') ? closeMenu() : openMenu();
});

mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

mobileNav.addEventListener('click', e => {
  if (e.target === mobileNav) closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 850) closeMenu();
});

// ─── CONTACT FORM ───

/**
 * Marks an input as invalid with a red border and inline error message.
 * @param {HTMLElement} input - The field to mark.
 * @param {string} message - Error text to display.
 */
function showError(input, message) {
  input.style.borderColor = '#e74c3c';
  let error = input.parentElement.querySelector('.error_msg');
  if (!error) {
    error = document.createElement('span');
    error.classList.add('error_msg');
    input.parentElement.appendChild(error);
  }
  error.textContent = message;
}

/**
 * Clears the error state from an input field.
 * @param {HTMLElement} input - The field to clear.
 */
function clearError(input) {
  input.style.borderColor = 'var(--color-blue)';
  const error = input.parentElement.querySelector('.error_msg');
  if (error) error.remove();
}

/**
 * Tests whether a string is a valid email address.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (contactForm) {
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', () => clearError(input));
  });

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    const t = translations[currentLang];

    if (!nameInput.value.trim()) {
      showError(nameInput, t.error_name);
      valid = false;
    }
    if (!emailInput.value.trim()) {
      showError(emailInput, t.error_email);
      valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, t.error_email_invalid);
      valid = false;
    }
    if (!messageInput.value.trim()) {
      showError(messageInput, t.error_message);
      valid = false;
    }
    if (!privacyCheckbox.checked) {
      privacyCheckbox.style.borderColor = '#e74c3c';
      valid = false;
    } else {
      privacyCheckbox.style.borderColor = 'var(--color-blue)';
    }

    if (!valid) return;

    sendBtn.textContent = t.sending;
    sendBtn.disabled = true;

    emailjs.send('service_gn89i8d', 'template_dqr9g9k', {
      from_name:  nameInput.value.trim(),
      from_email: emailInput.value.trim(),
      message:    messageInput.value.trim()
    }).then(() => {
      sendBtn.textContent = t.sent;
      contactForm.reset();
      setTimeout(() => {
        sendBtn.textContent = t.send_btn;
        sendBtn.disabled = false;
      }, 3000);
    }).catch(() => {
      sendBtn.textContent = t.error_send;
      sendBtn.disabled = false;
    });
  });
}
