if (typeof emailjs !== 'undefined') emailjs.init('sbVViQV7iH8oE2JZv');

/**
 * UI string translations keyed by language code.
 * @type {{en: Object, de: Object}}
 */
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
    privacy: 'Privacy Policy',
    privacy_page_title: 'Privacy Policy',
    privacy_controller_h2: 'Controller',
    privacy_form_h2: 'Contact Form',
    privacy_form_p1: 'When you use the contact form on this website, the data you enter — your name, e-mail address and message — is processed to answer your inquiry. By checking the consent box, you voluntarily agree to this processing. The legal basis is your consent pursuant to Art. 6(1)(a) GDPR.',
    privacy_form_p2: 'Your data is used solely to respond to your message. It is not shared with third parties for other purposes, sold, or used for marketing. Once your inquiry has been fully resolved, the related data is deleted unless legal retention obligations require otherwise.',
    privacy_emailjs_h2: 'Email Service — EmailJS',
    privacy_emailjs_p1: 'This website uses EmailJS to transmit contact form submissions. EmailJS acts as a data processor and forwards your message to my e-mail inbox via their servers. The transmission is encrypted. EmailJS is operated by Elastic Email Inc. and is bound by a data processing agreement. For details, see the EmailJS privacy policy at emailjs.com.',
    privacy_retention_h2: 'Data Retention',
    privacy_retention_p1: 'Contact form data is stored only for as long as necessary to handle your inquiry. After the inquiry is resolved, the data is deleted. E-mails may be subject to legal retention obligations of up to ten years under German commercial and tax law.',
    privacy_rights_h2: 'Your Rights',
    privacy_rights_p1: 'Under the GDPR you have the right to access, rectify, erase, restrict and port your personal data, and to object to its processing. You may also withdraw your consent at any time with effect for the future. To exercise any of these rights, please contact me at filip.rozanowski@gmail.com.',
    privacy_authority_h2: 'Supervisory Authority',
    privacy_authority_p1: 'You have the right to lodge a complaint with a data protection supervisory authority. The authority competent for North Rhine-Westphalia is the Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf, Germany.',
    legal_page_title: 'Legal Notice',
    legal_info_h2: 'Information according to § 5 TMG',
    legal_contact_h2: 'Contact',
    legal_disclaimer_h2: 'Disclaimer',
    legal_disclaimer_p1: 'The content of this website has been created with the utmost care. However, I cannot guarantee the accuracy, completeness or timeliness of the content. As a service provider, I am responsible for my own content on these pages in accordance with general laws pursuant to § 7 para. 1 TMG. According to §§ 8 to 10 TMG, however, I am not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
    legal_disclaimer_p2: 'Obligations to remove or block the use of information under the general laws remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. If I become aware of any such infringement, I will remove the relevant content immediately.',
    legal_links_h2: 'Liability for Links',
    legal_links_p1: 'My website contains links to external third-party websites over whose content I have no influence. Therefore, I cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not identifiable at the time of linking.',
    legal_links_p2: 'Permanent monitoring of the content of the linked pages is not reasonable without concrete indications of a legal violation. If I become aware of any infringement, I will remove such links immediately.',
    legal_copyright_h2: 'Copyright',
    legal_copyright_p1: 'The content and works on these pages created by me are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law requires my written consent. Downloads and copies of this site are only permitted for private, non-commercial use.',
    legal_copyright_p2: 'Insofar as the content on this site was not created by me, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform me accordingly. If I become aware of any infringements, I will remove such content immediately.',
    legal_privacy_h2: 'Privacy',
    legal_privacy_p1: 'The use of this website is generally possible without providing personal data. Insofar as personal data (e.g. name, address or e-mail address) is collected on this website, this is always done on a voluntary basis as far as possible. This data will not be passed on to third parties without your explicit consent.',
    legal_privacy_p2: 'Please note that data transmission over the Internet (e.g. when communicating by e-mail) may be subject to security vulnerabilities. Complete protection of data from access by third parties is not possible.',
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
    privacy: 'Datenschutzerklärung',
    privacy_page_title: 'Datenschutzerklärung',
    privacy_controller_h2: 'Verantwortlicher',
    privacy_form_h2: 'Kontaktformular',
    privacy_form_p1: 'Wenn du das Kontaktformular auf dieser Website nutzt, werden die von dir eingegebenen Daten — Name, E-Mail-Adresse und Nachricht — zur Beantwortung deiner Anfrage verarbeitet. Durch das Ankreuzen der Einwilligungsbox stimmst du dieser Verarbeitung freiwillig zu. Rechtsgrundlage ist deine Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.',
    privacy_form_p2: 'Deine Daten werden ausschließlich zur Beantwortung deiner Nachricht verwendet. Eine Weitergabe an Dritte zu anderen Zwecken, ein Verkauf oder eine Nutzung für Werbezwecke findet nicht statt. Nach vollständiger Bearbeitung deiner Anfrage werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
    privacy_emailjs_h2: 'E-Mail-Dienst — EmailJS',
    privacy_emailjs_p1: 'Diese Website nutzt EmailJS zur Übertragung von Kontaktformular-Eingaben. EmailJS fungiert als Auftragsverarbeiter und leitet deine Nachricht über deren Server an mein E-Mail-Postfach weiter. Die Übertragung erfolgt verschlüsselt. EmailJS wird von Elastic Email Inc. betrieben und ist durch einen Auftragsverarbeitungsvertrag gebunden. Weitere Informationen findest du in der Datenschutzerklärung von EmailJS unter emailjs.com.',
    privacy_retention_h2: 'Datenspeicherung',
    privacy_retention_p1: 'Kontaktformulardaten werden nur so lange gespeichert, wie es zur Bearbeitung deiner Anfrage erforderlich ist. Nach Abschluss der Anfrage werden die Daten gelöscht. E-Mails können gesetzlichen Aufbewahrungsfristen von bis zu zehn Jahren nach deutschem Handels- und Steuerrecht unterliegen.',
    privacy_rights_h2: 'Deine Rechte',
    privacy_rights_p1: 'Gemäß DSGVO hast du das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit sowie das Recht auf Widerspruch gegen die Verarbeitung. Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Zur Ausübung dieser Rechte wende dich bitte an filip.rozanowski@gmail.com.',
    privacy_authority_h2: 'Aufsichtsbehörde',
    privacy_authority_p1: 'Du hast das Recht, eine Beschwerde bei einer Datenschutzaufsichtsbehörde einzureichen. Die zuständige Behörde für Nordrhein-Westfalen ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf.',
    legal_page_title: 'Impressum',
    legal_info_h2: 'Angaben gemäß § 5 TMG',
    legal_contact_h2: 'Kontakt',
    legal_disclaimer_h2: 'Haftungsausschluss',
    legal_disclaimer_p1: 'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
    legal_disclaimer_p2: 'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.',
    legal_links_h2: 'Haftung für Links',
    legal_links_p1: 'Meine Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.',
    legal_links_p2: 'Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.',
    legal_copyright_h2: 'Urheberrecht',
    legal_copyright_p1: 'Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
    legal_copyright_p2: 'Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.',
    legal_privacy_h2: 'Datenschutz',
    legal_privacy_p1: 'Die Nutzung dieser Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf diesen Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.',
    legal_privacy_p2: 'Ich weise darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
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

/**
 * The currently active language code, persisted in localStorage.
 * @type {string}
 */
let currentLang = localStorage.getItem('lang') || 'en';

/**
 * Updates all translatable DOM elements to the given language.
 * @param {string} lang - Language code ('en' or 'de').
 * @returns {void}
 */
function applyLanguage(lang) {
  const desktopNavLinks = document.querySelectorAll('nav a:not(.lang-btn)');
  if (desktopNavLinks[0]) desktopNavLinks[0].textContent = translations[lang].nav_whyme;
  if (desktopNavLinks[1]) desktopNavLinks[1].textContent = translations[lang].nav_skills;
  if (desktopNavLinks[2]) desktopNavLinks[2].textContent = translations[lang].nav_projects;
  if (desktopNavLinks[3]) desktopNavLinks[3].textContent = translations[lang].nav_contact;

  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  if (mobileNavLinks[0]) mobileNavLinks[0].textContent = translations[lang].nav_whyme;
  if (mobileNavLinks[1]) mobileNavLinks[1].textContent = translations[lang].nav_skills;
  if (mobileNavLinks[2]) mobileNavLinks[2].textContent = translations[lang].nav_projects;
  if (mobileNavLinks[3]) mobileNavLinks[3].textContent = translations[lang].nav_contact;

  const legalFooterEl = document.querySelector('#footer_legal [data-i18n="legal"]');
  if (legalFooterEl) legalFooterEl.textContent = translations[lang].legal;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (key !== 'legal' && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  if (!document.getElementById('whyme_title')) return;

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

const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
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
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll(`.lang-btn[data-lang="${currentLang}"]`).forEach(b => b.classList.add('active'));
  applyLanguage(currentLang);
}

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

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (nav) {
    nav.style.boxShadow = window.scrollY > 0 ? '0 4px 20px rgba(0,0,0,0.4)' : 'none';
  }
});

const burgerBtn  = document.getElementById('burger-btn');
const mobileNav  = document.getElementById('mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

/**
 * Opens the mobile navigation overlay and locks page scroll.
 * @returns {void}
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
 * @returns {void}
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

mobileNav.addEventListener('click', (e) => {
  if (e.target === mobileNav) closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 850) closeMenu();
});

const contactForm  = document.getElementById('contact_form');
const nameInput    = document.getElementById('contact_name');
const emailInput   = document.getElementById('contact_email');
const messageInput = document.getElementById('contact_message');
const checkbox     = document.getElementById('privacy');
const sendBtn      = document.getElementById('contact_send');

/**
 * Highlights an input with an error border and displays an error message below it.
 * @param {HTMLElement} input - The form input element to mark as invalid.
 * @param {string} message - The error text to display.
 * @returns {void}
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
 * Resets an input's border colour and removes any associated error message.
 * @param {HTMLElement} input - The form input element to clear.
 * @returns {void}
 */
function clearError(input) {
  input.style.borderColor = 'var(--color-blue)';
  const error = input.parentElement.querySelector('.error_msg');
  if (error) error.remove();
}

/**
 * Tests whether a string is a valid email address format.
 * @param {string} email - The email string to validate.
 * @returns {boolean} True if the email matches the expected pattern.
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (contactForm) {
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
      from_name:  nameInput.value.trim(),
      from_email: emailInput.value.trim(),
      message:    messageInput.value.trim()
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
}
