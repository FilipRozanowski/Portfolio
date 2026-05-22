# Filip Rozanowski — Developer Portfolio

Personal portfolio website for Filip Rozanowski, Frontend Developer based in Ense, Germany.  
Built with plain HTML, CSS and JavaScript — no frameworks, no build tool, no dependencies beyond EmailJS.

**Live:** [filip-rozanowski.de](https://filip-rozanowski.de)

---

## Features

- **Bilingual UI (EN / DE)** — instant language switch, selection persisted via `localStorage`
- **Project showcase** — tabbed panels with live demo and GitHub links for each project
- **Colleague testimonials** — real quotes with LinkedIn profile links
- **Contact form** — client-side validation and email delivery via EmailJS
- **Responsive layout** — fluid typography (`clamp`), custom breakpoints, mobile burger navigation with scroll lock
- **Legal compliance** — fully translated Impressum and Privacy Policy pages (GDPR / TMG)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 — custom properties, `clamp()`, flexbox |
| Logic | Vanilla JavaScript ES6+ |
| Email delivery | [EmailJS Browser SDK v4](https://www.emailjs.com/) |
| Fonts | Self-hosted (see `fonts/`) |

No bundler, no framework, no Node.js required.

---

## Project Structure

```
Portfolio/
├── index.html              # Single-page main view
├── legal.html              # Legal notice (Impressum)
├── privacy.html            # Privacy policy (Datenschutz)
├── script.js               # All interactive behaviour
├── translations.js         # EN / DE string table
│
├── css/
│   ├── base.css            # Custom properties, reset, typography
│   ├── nav.css             # Desktop sticky navigation
│   ├── header.css          # Hero / header section
│   ├── sections.css        # Shared section layout
│   ├── skills.css          # Skills grid and learning bubble
│   ├── projects.css        # Project tabs and detail panels
│   ├── contact.css         # Contact form and info block
│   ├── footer.css          # Footer layout
│   ├── responsive-nav.css  # Mobile navigation overlay
│   └── responsive.css      # Breakpoint overrides
│
├── imgs/
│   ├── svgs/               # Icons, logo, buttons
│   ├── filip.png           # Profile photo
│   ├── join.png            # Project preview — Join
│   ├── elpolloloco.png     # Project preview — El Pollo Loco
│   └── pokedex.png         # Project preview — Pokédex
│
└── fonts/                  # Self-hosted typefaces
```

---

## Getting Started

No build step needed. Open `index.html` directly in any modern browser, or spin up a local server for accurate MIME types:

```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .

# VS Code
# Install the "Live Server" extension, then click "Go Live"
```

---

## EmailJS Configuration

The contact form sends messages through [EmailJS](https://www.emailjs.com/) — no server required.  
To connect it to your own account, replace three values in `script.js`:

```js
// 1. Public key — found under Account › General
emailjs.init('YOUR_PUBLIC_KEY');

// 2. Service ID and Template ID — found in your EmailJS dashboard
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params);
```

The email template must expose three variables: `from_name`, `from_email`, `message`.

---

## Translations

All UI strings are centralised in `translations.js` as a plain object:

```js
const translations = {
  en: { nav_whyme: 'Why me', ... },
  de: { nav_whyme: 'Über mich', ... }
};
```

To add a third language:
1. Add a new key block to `translations.js`
2. Add a `<a class="lang-btn" data-lang="xx">XX</a>` button in the nav (both desktop and mobile) in `index.html`

---

## Showcased Projects

| Project | Stack | Duration | Live | Source |
|---|---|---|---|---|
| **Join** | HTML · CSS · JS | 4 weeks (team) | [join.filip-rozanowski.de](https://join.filip-rozanowski.de) | [GitHub](https://github.com/ChristopherBraun196/join) |
| **El Pollo Loco** | HTML · CSS · JS | 3 weeks (solo) | [elpolloloco.filip-rozanowski.de](https://elpolloloco.filip-rozanowski.de) | [GitHub](https://github.com/FilipRozanowski/El-pollo-loco) |
| **Pokédex** | HTML · CSS · JS | 1 week (solo) | [pokedex.filip-rozanowski.de](https://pokedex.filip-rozanowski.de) | [GitHub](https://github.com/FilipRozanowski/Pokedex) |

---

## Contact

**Filip Rozanowski**  
filip.rozanowski@gmail.com  
[LinkedIn](https://www.linkedin.com/in/filip-rozanowski-66993840b/) · [GitHub](https://github.com/FilipRozanowski)

---

## License

© Filip Rozanowski 2026. All rights reserved.  
Content and code may not be reproduced or distributed without written permission.
