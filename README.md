# MBD Maran Digital Archive 🗃️

The official digital repository and landing page for **Majlis Belia Daerah (MBD) Maran**. This prototype is designed to empower the youth of Maran through a modern, interactive, and fully responsive digital presence.

## 🚀 Features

- **Modern Glassmorphism UI:** Clean gradients, blur effects, and premium design language.
- **Dark Mode Support:** Built-in seamless Theme Toggling (`Light`/`Dark`) that persists user preferences using `localStorage`.
- **Dynamic CSS Animations:** Custom floating elements, pulse-glow effects, and scroll-triggered reveals (`.reveal`, `.reveal-left`, `.reveal-right`).
- **Strategic Pillars 2026 Display:** Outlining the core missions (Digital Literacy, Economic Resilience, Social Leadership, Volunteerism).
- **Interactive Organization Chart:** A beautiful, connecting hierarchy tree mapping the MBD Maran leadership.
- **Affiliated Ecosystem:** Grid showcasing all grassroots organizations operating under the MBD Maran umbrella.
- **Native TikTok Integration:** A full-width embedded widget actively pulling the latest live updates from [@beliamaran](https://www.tiktok.com/@beliamaran).
- **Membership Application:** A simulated glass-concept registration form with submitting animations.

## 🛠️ Built With

- **HTML5**
- **Vanilla CSS3** (Custom properties, animations, media queries)
- **Vanilla JavaScript** (DOM manipulation, Intersection Observers for scroll reveal, localStorage for Dark Mode)
- **Tailwind CSS** (via CDN for rapid utility styling and layout structuring)
- **Lucide Icons** (Beautiful, lightweight open-source icons)

## 📂 Project Structure

```text
├── index.html     # Main gateway and landing page structure
├── style.css      # Core styles, animations, variables, and dark mode overrides
├── script.js      # Interactivity, smooth scrolling, theme toggling, and scroll reveals
├── logo.png       # MBD Maran Official Logo (used in Nav and Footer)
```

## ⚡ Quick Start

Since this is a static prototype built with pure HTML/CSS/JS and CDNs, no build processes or `npm` installations are required.

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.
3. Enjoy the MBD Maran Digital Archive!

## 🌗 Dark Mode Logic

The theme state is handled inside `script.js` which detects the user's system preferences on first load:
- If a preference is saved in `localStorage.theme`, it respects that.
- Otherwise, it falls back to `window.matchMedia('(prefers-color-scheme: dark)')`.
- Toggling the theme switches classes on the `<html>` root and immediately saves the new preference.

## 📜 License & Copyright

© 2026 Majlis Belia Daerah Maran. All Rights Reserved. Engineered for the youth of Maran.
