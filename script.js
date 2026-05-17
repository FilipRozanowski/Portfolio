emailjs.init('sbVViQV7iH8oE2JZv');

// ─── TRANSLATIONS ───
const translations = {
  en: {
    nav_whyme: 'Why me',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    whyme_title: 'Why me',
    skills_title: 'My Skills',
    projects_title: 'My Projects',
    contact_title: 'Contact me',
    whyme_text: "I'm not just someone who codes to get things done — I actually care about the details. When something doesn't look right or could work better, it bothers me until I fix it. I'm the kind of person who looks up why something works, not just that it works. I like to keep my code clean and think about how others might read it later. I'm still learning, but I pick things up fast and I don't give up easily when I hit a wall. If you give me a problem, I'll figure it out.",
    bubble_title: 'I am currently learning',
    bubble_text: 'Motivated to continually improve my skills and stay up to date with new technologies.',
    teamplayer_title: "Need a teamplayer? Here's what my colleagues say about me",
    contact_intro: "Feel free to get in touch with job offers or any kind of opportunities. I'm always open to new projects and collaborations.",
    label_name: 'Your name',
    label_email: 'Your Email',
    label_message: 'Your Message',
    send_btn: 'Send',
    sending: 'Sending...',
    sent: 'Sent!',
    error_send: 'Error — try again',
    error_name: 'Please enter your name.',
    error_email: 'Please enter your email.',
    error_email_invalid: 'Please enter a valid email address.',
    error_message: 'Please enter a message.',
    legal: 'Legal notice',
    join_about: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop, assign them to team members, track progress across columns and manage your contacts.',
    join_process: 'We split the app into clear components from the start — board, tasks, contacts and auth each had their own files and logic. We used Git to coordinate our work and kept naming and structure consistent so anyone could jump into any part of the code.',
    join_team: 'Built in a team of three, with each person owning specific features. I worked on the task board and drag & drop logic. We held regular check-ins to stay aligned and made sure no one was blocked for long — clean communication made the whole project run smoothly.',
    pollo_about: 'A browser-based 2D jump & run game where you play as a Mexican character fighting off chickens. Collect coins and Tabasco bottles across the level to power up and defeat the final boss. Built entirely in vanilla JavaScript with a focus on object-oriented programming.',
    pollo_process: 'Every game element — the player, enemies, collectibles and the endboss — is its own class with clear responsibilities. I structured the project around inheritance so shared logic like movement and collision lives in base classes, keeping each object clean and focused. Assets, levels and game logic are separated into their own files.',
    pollo_team: 'This was a solo project, which meant full ownership of every decision — architecture, game logic, balancing and debugging. It pushed me to think more carefully about structure upfront, since there was no one else to untangle messy code. Finishing a playable game independently was one of the more satisfying results of the bootcamp.',
    pokedex_about: 'A Pokédex web app built by consuming a public REST API. Search and browse Pokémon, view their stats, types and details — all fetched live from the PokéAPI. Clean, responsive and fast.',
    pokedex_process: 'I kept the project intentionally simple and clean — API calls, rendering logic and styling each in their own place. Working with external data taught me how to handle asynchronous requests, parse JSON responses and display dynamic content without a framework.',
    pokedex_team: 'Solo project from start to finish. Short timeline meant I had to prioritise fast — core functionality first, polish after. It was a great exercise in working with real-world APIs and translating raw data into a usable interface.',
    mischa_text: '"What I appreciate most is that he actually cares about the code quality. He asks good questions and never ships something he doesn\'t understand."',
    christopher_text: '"Filip is easy to work with. He communicates clearly, takes feedback well and always follows through on what he says he\'ll do."',
    checkbox_before: "I've read the ",
    checkbox_after: ' and agree to the processing of my data as outlined.',
    checkbox_text: "I've read the privacy policy and agree to the processing of my data as outlined.",
    privacy_link: 'privacy policy',
    about_project: 'About the project',
    work_process: 'How I have organised my work process',
    group_exp: 'My group work experience',
    solo_exp: 'My solo work experience',
    duration_join: 'Duration: 4 weeks',
    duration_pollo: 'Duration: 3 weeks',
    duration_pokedex: 'Duration: 1 week',
    located_link: 'I am ',
    located_text: 'located in Ense..|',
  },
  de: {
    nav_whyme: 'Über mich',
    nav_skills: 'Fähigkeiten',
    nav_projects: 'Projekte',
    nav_contact: 'Kontakt',
    whyme_title: 'Über mich',
    skills_title: 'Meine Fähigkeiten',
    projects_title: 'Meine Projekte',
    contact_title: 'Kontakt',
    whyme_text: 'Ich bin nicht nur jemand, der Code schreibt um Aufgaben abzuhaken — mir sind die Details wichtig. Wenn etwas nicht stimmt oder besser sein könnte, lässt mich das nicht los bis ich es behoben habe. Ich bin jemand, der verstehen will warum etwas funktioniert, nicht nur dass es funktioniert. Ich schreibe sauberen Code und denke daran, wie andere ihn später lesen werden. Ich lerne noch, aber ich lerne schnell und gebe nicht auf wenn ich auf ein Problem stoße. Gib mir eine Aufgabe — ich finde einen Weg.',
    bubble_title: 'Ich lerne gerade',
    bubble_text: 'Motiviert, meine Fähigkeiten kontinuierlich zu verbessern und mit neuen Technologien auf dem Laufenden zu bleiben.',
    teamplayer_title: 'Teamplayer gesucht? Das sagen meine Kollegen über mich',
    contact_intro: 'Meld dich gerne bei Jobangeboten oder anderen Möglichkeiten. Ich bin immer offen für neue Projekte und Zusammenarbeit.',
    label_name: 'Dein Name',
    label_email: 'Deine E-Mail',
    label_message: 'Deine Nachricht',
    send_btn: 'Senden',
    sending: 'Wird gesendet...',
    sent: 'Gesendet!',
    error_send: 'Fehler — erneut versuchen',
    error_name: 'Bitte gib deinen Namen ein.',
    error_email: 'Bitte gib deine E-Mail-Adresse ein.',
    error_email_invalid: 'Bitte gib eine gültige E-Mail-Adresse ein.',
    error_message: 'Bitte gib eine Nachricht ein.',
    legal: 'Impressum',
    join_about: 'Ein Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag & Drop, weise sie Teammitgliedern zu, verfolge den Fortschritt und verwalte deine Kontakte.',
    join_process: 'Wir haben die App von Anfang an in klare Komponenten aufgeteilt — Board, Aufgaben, Kontakte und Authentifizierung hatten jeweils eigene Dateien und Logik. Wir nutzten Git zur Koordination und hielten Namensgebung und Struktur konsistent.',
    join_team: 'Entwickelt in einem Dreierteam, mit klarer Aufgabenteilung. Ich war zuständig für das Task-Board und die Drag & Drop Logik. Regelmäßige Abstimmungen sorgten dafür, dass niemand lange blockiert war.',
    pollo_about: 'Ein browserbasiertes 2D Jump & Run Spiel, in dem man einen mexikanischen Charakter spielt und gegen Hühner kämpft. Sammle Münzen und Tabasco-Flaschen um den Endboss zu besiegen. Entwickelt mit Vanilla JavaScript und Fokus auf objektorientierter Programmierung.',
    pollo_process: 'Jedes Spielelement — Spieler, Gegner, Sammelobjekte und Endboss — ist eine eigene Klasse mit klar definierten Aufgaben. Ich nutzte Vererbung damit gemeinsame Logik wie Bewegung und Kollision in Basisklassen liegt.',
    pollo_team: 'Ein Soloprojekt mit voller Verantwortung für alle Entscheidungen — Architektur, Spiellogik, Balancing und Debugging. Es hat mich gelehrt, die Struktur von Anfang an durchzudenken. Ein fertiges Spiel alleine zu entwickeln war eines der befriedigendsten Ergebnisse des Bootcamps.',
    pokedex_about: 'Eine Pokédex-Web-App die eine öffentliche REST API nutzt. Suche und durchstöbere Pokémon, sieh dir ihre Werte, Typen und Details an — alles live von der PokéAPI geladen.',
    pokedex_process: 'Ich habe das Projekt bewusst einfach und sauber gehalten — API-Aufrufe, Renderlogik und Styling jeweils an ihrem eigenen Ort. Die Arbeit mit externen Daten hat mir gezeigt wie man asynchrone Anfragen verarbeitet und dynamische Inhalte ohne Framework darstellt.',
    pokedex_team: 'Soloprojekt von Anfang bis Ende. Die kurze Zeit hat mich gezwungen zu priorisieren — erst die Kernfunktionen, dann der Feinschliff. Eine gute Übung darin, echte API-Daten in eine nutzbare Oberfläche zu übersetzen.',
    mischa_text: '„Was ich am meisten schätze ist, dass ihm Code-Qualität wirklich wichtig ist. Er stellt gute Fragen und liefert nie etwas ab, das er nicht versteht."',
    christopher_text: '„Filip ist angenehm im Team. Er kommuniziert klar, nimmt Feedback gut an und zieht immer durch was er ankündigt."',
    checkbox_text: 'Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.',
    checkbox_before: 'Ich habe die ',
    checkbox_after: ' gelesen und stimme der Verarbeitung meiner Daten zu.',
    privacy_link: 'Datenschutzerklärung',
    about_project: 'Über das Projekt',
    work_process: 'Wie ich meinen Arbeitsprozess organisiert habe',
    group_exp: 'Meine Gruppenarbeitserfahrung',
    solo_exp: 'Meine Einzelarbeitserfahrung',
    duration_join: 'Dauer: 4 Wochen',
    duration_pollo: 'Dauer: 3 Wochen',
    duration_pokedex: 'Dauer: 1 Woche',
    located_link: 'Ich bin ',
    located_text: 'wohnhaft in Ense..|',
  }
};

let currentLang = 'en';

function applyLanguage(lang) {
  document.querySelector('nav [href="#whyme_title"]').textContent = translations[lang].nav_whyme;
  document.querySelector('nav [href="#skills_title"]').textContent = translations[lang].nav_skills;
  document.querySelector('nav [href="#projects_title"]').textContent = translations[lang].nav_projects;
  document.querySelector('nav [href="#contact_title"]').textContent = translations[lang].nav_contact;
  document.getElementById('whyme_title').textContent = translations[lang].whyme_title;
  document.getElementById('skills_title').textContent = translations[lang].skills_title;
  document.getElementById('projects_title').textContent = translations[lang].projects_title;
  document.getElementById('contact_title').textContent = translations[lang].contact_title;
  document.querySelector('#whyme_content > p').textContent = translations[lang].whyme_text;
  document.querySelector('.bubble_title').textContent = translations[lang].bubble_title;
  document.querySelector('.bubble_text').textContent = translations[lang].bubble_text;
  document.querySelector('main h2').textContent = translations[lang].teamplayer_title;
  document.getElementById('contact_intro').textContent = translations[lang].contact_intro;
  document.querySelectorAll('.input_group label')[0].textContent = translations[lang].label_name;
  document.querySelectorAll('.input_group label')[1].textContent = translations[lang].label_email;
  document.querySelectorAll('.input_group label')[2].textContent = translations[lang].label_message;
  document.getElementById('contact_send').textContent = translations[lang].send_btn;
  document.querySelector('#footer_legal a').textContent = translations[lang].legal;
  document.querySelectorAll('.project_panel[data-project="join"] .project_section p')[0].textContent = translations[lang].join_about;
  document.querySelectorAll('.project_panel[data-project="join"] .project_section p')[1].textContent = translations[lang].join_process;
  document.querySelectorAll('.project_panel[data-project="join"] .project_section p')[2].textContent = translations[lang].join_team;
  document.querySelectorAll('.project_panel[data-project="el pollo loco"] .project_section p')[0].textContent = translations[lang].pollo_about;
  document.querySelectorAll('.project_panel[data-project="el pollo loco"] .project_section p')[1].textContent = translations[lang].pollo_process;
  document.querySelectorAll('.project_panel[data-project="el pollo loco"] .project_section p')[2].textContent = translations[lang].pollo_team;
  document.querySelectorAll('.project_panel[data-project="pokedex"] .project_section p')[0].textContent = translations[lang].pokedex_about;
  document.querySelectorAll('.project_panel[data-project="pokedex"] .project_section p')[1].textContent = translations[lang].pokedex_process;
  document.querySelectorAll('.project_panel[data-project="pokedex"] .project_section p')[2].textContent = translations[lang].pokedex_team;
  document.querySelectorAll('.teamplayer_text')[0].textContent = translations[lang].mischa_text;
  document.querySelectorAll('.teamplayer_text')[1].textContent = translations[lang].christopher_text;
  document.querySelector('[data-i18n="checkbox_before"]').textContent = translations[lang].checkbox_before;
  document.querySelector('[data-i18n="checkbox_after"]').textContent = translations[lang].checkbox_after;
  document.querySelector('#contact_checkbox label a').textContent = translations[lang].privacy_link;
  document.querySelectorAll('.project_section h3')[0].childNodes[0].textContent = translations[lang].about_project + ' ';
  document.querySelectorAll('.project_section h3')[1].textContent = translations[lang].work_process;
  document.querySelectorAll('.project_section h3')[2].textContent = translations[lang].group_exp;
  document.querySelectorAll('.project_section h3')[3].childNodes[0].textContent = translations[lang].about_project + ' ';
  document.querySelectorAll('.project_section h3')[4].textContent = translations[lang].work_process;
  document.querySelectorAll('.project_section h3')[5].textContent = translations[lang].solo_exp;
  document.querySelectorAll('.project_section h3')[6].childNodes[0].textContent = translations[lang].about_project + ' ';
  document.querySelectorAll('.project_section h3')[7].textContent = translations[lang].work_process;
  document.querySelectorAll('.project_section h3')[8].textContent = translations[lang].solo_exp;
  document.querySelectorAll('.project_duration')[0].textContent = translations[lang].duration_join;
  document.querySelectorAll('.project_duration')[1].textContent = translations[lang].duration_pollo;
  document.querySelectorAll('.project_duration')[2].textContent = translations[lang].duration_pokedex;
  document.querySelector('#locate_content a').textContent = translations[lang].located_link;
  document.querySelector('#locate_content p').childNodes[1].textContent = translations[lang].located_text;
}

// ─── LANGUAGE BUTTONS ───
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLang = btn.dataset.lang;
    applyLanguage(currentLang);
  });
});

// ─── PROJECT TABS ───
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

// ─── NAV SHADOW ───
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ─── CONTACT FORM ───
const contactForm = document.getElementById('contact_form');
const nameInput = document.getElementById('contact_name');
const emailInput = document.getElementById('contact_email');
const messageInput = document.getElementById('contact_message');
const checkbox = document.getElementById('privacy');
const sendBtn = document.getElementById('contact_send');

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

function clearError(input) {
  input.style.borderColor = 'var(--color-blue)';
  const error = input.parentElement.querySelector('.error_msg');
  if (error) error.remove();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('input', () => clearError(input));
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  if (!nameInput.value.trim()) {
    showError(nameInput, translations[currentLang].error_name);
    valid = false;
  }

  if (!emailInput.value.trim()) {
    showError(emailInput, translations[currentLang].error_email);
    valid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, translations[currentLang].error_email_invalid);
    valid = false;
  }

  if (!messageInput.value.trim()) {
    showError(messageInput, translations[currentLang].error_message);
    valid = false;
  }

  if (!checkbox.checked) {
    checkbox.style.borderColor = '#e74c3c';
    valid = false;
  } else {
    checkbox.style.borderColor = 'var(--color-blue)';
  }

  if (!valid) return;

  sendBtn.textContent = translations[currentLang].sending;
  sendBtn.disabled = true;

  emailjs.send('service_gn89i8d', 'template_dqr9g9k', {
    from_name: nameInput.value.trim(),
    from_email: emailInput.value.trim(),
    message: messageInput.value.trim()
  }).then(() => {
    sendBtn.textContent = translations[currentLang].sent;
    contactForm.reset();
    setTimeout(() => {
      sendBtn.textContent = translations[currentLang].send_btn;
      sendBtn.disabled = false;
    }, 3000);
  }).catch(() => {
    sendBtn.textContent = translations[currentLang].error_send;
    sendBtn.disabled = false;
  });
});