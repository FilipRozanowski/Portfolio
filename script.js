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
 * Updates every element carrying a [data-i18n] attribute to the given language.
 * @param {string} lang - Language code ('en' | 'de').
 */
function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
}

/**
 * Marks all .lang-btn elements inactive and activates the buttons matching lang.
 * @param {string} lang - Language code ('en' | 'de').
 */
function setActiveLangBtns(lang) {
  langBtns.forEach(b => b.classList.remove('active'));
  document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(b => b.classList.add('active'));
}

/**
 * Persists the chosen language to localStorage and applies it to the UI.
 * @param {string} lang - Language code ('en' | 'de').
 */
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  setActiveLangBtns(lang);
  applyLanguage(lang);
}

langBtns.forEach(btn => btn.addEventListener('click', e => {
  e.preventDefault();
  switchLanguage(btn.dataset.lang);
}));

if (currentLang !== 'en') {
  setActiveLangBtns(currentLang);
  applyLanguage(currentLang);
}

// ─── PROJECTS ───

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    projectPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector(`.project_panel[data-project="${btn.dataset.project}"]`).classList.add('active');
  });
});

// ─── NAV ───

window.addEventListener('scroll', () => {
  if (nav) nav.style.boxShadow = window.scrollY > 0 ? '0 4px 20px rgba(0,0,0,0.4)' : 'none';
});

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

burgerBtn.addEventListener('click', () => mobileNav.classList.contains('open') ? closeMenu() : openMenu());
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
mobileNav.addEventListener('click', e => { if (e.target === mobileNav) closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 850) closeMenu(); });

// ─── CONTACT FORM ───

/**
 * Marks a form input as invalid and renders an inline error message below it.
 * @param {HTMLElement} input - The field to mark.
 * @param {string} message - Error text to display beneath the field.
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
 * Clears the error state from a form input and removes any error message.
 * @param {HTMLElement} input - The field to clear.
 */
function clearError(input) {
  input.style.borderColor = 'var(--color-blue)';
  const error = input.parentElement.querySelector('.error_msg');
  if (error) error.remove();
}

/**
 * Tests whether a string is a syntactically valid email address.
 * @param {string} email - The string to test.
 * @returns {boolean} True if the string matches a basic email pattern.
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validates all contact form fields and marks each invalid one with an error.
 * @param {Object} t - Translation strings for the active language.
 * @param {string} t.error_name - Error text for a missing name.
 * @param {string} t.error_email - Error text for a missing email.
 * @param {string} t.error_email_invalid - Error text for a malformed email.
 * @param {string} t.error_message - Error text for a missing message.
 * @returns {boolean} True when every field passes validation.
 */
function validateFields(t) {
  let valid = true;
  if (!nameInput.value.trim()) { showError(nameInput, t.error_name); valid = false; }
  if (!emailInput.value.trim()) { showError(emailInput, t.error_email); valid = false; }
  else if (!isValidEmail(emailInput.value.trim())) { showError(emailInput, t.error_email_invalid); valid = false; }
  if (!messageInput.value.trim()) { showError(messageInput, t.error_message); valid = false; }
  if (!privacyCheckbox.checked) { privacyCheckbox.style.borderColor = '#e74c3c'; valid = false; }
  else { privacyCheckbox.style.borderColor = 'var(--color-blue)'; }
  return valid;
}

/**
 * Resets the send button and contact form after a successful email delivery.
 * @param {Object} t - Translation strings for the active language.
 * @param {string} t.sent - Button label while showing success state.
 * @param {string} t.send_btn - Default button label to restore after 3 s.
 */
function onEmailSent(t) {
  sendBtn.textContent = t.sent;
  contactForm.reset();
  setTimeout(() => { sendBtn.textContent = t.send_btn; sendBtn.disabled = false; }, 3000);
}

/**
 * Restores the send button to its default state after a failed email delivery.
 * @param {Object} t - Translation strings for the active language.
 * @param {string} t.error_send - Button label to show on failure.
 */
function onEmailError(t) {
  sendBtn.textContent = t.error_send;
  sendBtn.disabled = false;
}

/**
 * Disables the send button and delivers the contact form data via EmailJS.
 * @param {Object} t - Translation strings for the active language.
 * @param {string} t.sending - Button label to show while the request is in flight.
 */
function sendEmail(t) {
  sendBtn.textContent = t.sending;
  sendBtn.disabled = true;
  const params = { from_name: nameInput.value.trim(), from_email: emailInput.value.trim(), message: messageInput.value.trim() };
  emailjs.send('service_gn89i8d', 'template_dqr9g9k', params)
    .then(() => onEmailSent(t))
    .catch(() => onEmailError(t));
}

if (contactForm) {
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', () => clearError(input));
  });

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const t = translations[currentLang];
    if (!validateFields(t)) return;
    sendEmail(t);
  });
}
