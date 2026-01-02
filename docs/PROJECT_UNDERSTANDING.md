# Project Understanding Report: Manhagko

## 1. One-Page Overview
**Manhagko** is an educational web platform designed for STEM high school students (specifically "Seniors 2026", Grade 12/STEM 3). It provides localized learning resources for Math, Physics, Mechanics, Arabic, Social Studies, and AI.

**Key Features:**
- **Navigation:** Deep hierarchical navigation (Home -> Term -> Subject -> Lesson).
- **Localized Content:** Scientific concepts (Math/Physics) are presented with English terms but explained in Egyptian Arabic.
- **AI Integration:** A client-side "Manhagko AI" chatbot (using OpenRouter) and an "Explainer" feature to simplify concepts.
- **Contributions:** A dual-mode system allowing students to upload summaries (PDFs/Links) either via a Flask backend (local/legacy) or directly to Google Drive/Sheets (live production).
- **Resources:** Direct access to PDF textbooks and external drive links.

**Target Audience:** STEM High School Students (Egypt).

---

## 2. Tech Stack & Build

### Core Stack
- **Frontend:** Vanilla HTML5, CSS3 (Custom "Futuristic" Theme), JavaScript (ES6+). No frameworks (React/Vue).
- **Backend (Hybrid):**
    - **Production (Netlify):** Static hosting. Client-side JS handles logic via APIs.
    - **Local/Legacy (Flask):** `app.py` exists to serve files and handle uploads locally, but is bypassed in the live Netlify version for the "Contributions" feature which uses Google APIs directly.
- **Styling:** Pure CSS with CSS Variables (`:root` for theming). Heavy use of glassmorphism and neon glow effects.
- **Math Rendering:** MathJax (`tex-mml-chtml.js`).

### Deployment
- **Platform:** Netlify (inferred from `manhagko.netlify.app` in meta tags).
- **Configuration:** No `netlify.toml` found in root, relying on Netlify's default static site detection (serves `index.html`).
- **Build Command:** None required (Pre-built static files).

### Environment Variables
**WARNING:** API Keys are currently HARDCODED in client-side code (`scripts/ai-system.js` and `scripts/drive-init.js`).
- `GOOGLE_CONFIG.apiKey`: For Google Sheets/Drive access.
- `GOOGLE_CONFIG.clientId`: For Google OAuth.
- `AI_CONFIG.apiKeys`: Array of OpenRouter keys for the chatbot.

### How to Run Locally
1. **Requirements:** Python 3.x, Flask (`pip install -r requirements.txt`).
2. **Start Command:** Run `Run.bat` (Windows).
    - Starts browser at `http://localhost:5000`.
    - Runs `python app.py`.

---

## 3. System Map

| Directory | Purpose |
|-----------|---------|
| `/` | Root. Contains `index.html` (Landing), `app.py` (Server), `Run.bat`. |
| `/Term 1/` | Main content root for Term 1. |
| `/Term 1/{Subject}/` | dedicated folder for each subject (Math, Physics, Mechanics, etc.). |
| `/Term 1/{Subject}/lessons/` | JS files storing the *content* of lessons as HTML strings. |
| `/scripts/` | Core logic: `ai-system.js` (Chatbot), `drive-init.js` (Google Integration). |
| `/styles/` | Global styles (`futuristic.css`). |
| `/uploads/` | Local storage for files uploaded via Flask (not used in Netlify deploy). |
| `/docs/` | Documentation assets. |

---

## 4. Route Map & Navigation

| Route / Page | File Path | Purpose | Dependencies |
|--------------|-----------|---------|--------------|
| **Home** | `/index.html` | Landing page, Term selection, Chatbot modal. | `ai-system.js`, `drive-init.js` |
| **Contributions** | `/contributions.html` | Student uploads & viewing shared resources. | `drive-init.js` (Google Auth/Sheets) |
| **Resources** | `/resources.html` | General resources hub. | - |
| **Math Pure** | `/Term 1/Math/index.html` | Math subject hub & lesson viewer. | `lessons/mathLessons.js` |
| **Physics** | `/Term 1/Physics/index.html` | Physics subject hub & lesson viewer. | `lessons/lesson{N}_full.js` |
| **Mechanics** | `/Term 1/mechanics/index.html` | Mechanics subject hub. | `lessons/mechanicsLessons.js` (assumed) |
| **AI (Theory)** | `/Term 1/AI/index.html` | AI subject hub (Theory/Flashcards). | `ai_questions_parsed.js` |

---

## 5. Content Pipeline

### How Content is Stored
- **Lessons:** stored as **HTML Strings** inside JavaScript variables in `/Term 1/{Subject}/lessons/*.js`.
    - *Example:* `window.mathLesson1 = "<div class='lesson-header'>...</div>";`
- **TOC (Table of Contents):** Hardcoded in the `index.html` of each subject within the `<nav class="sidebar">` element.
- **Flashcards (AI Subject):** JSON array in `ai_questions_parsed.js`.

### How to Add a New Lesson
1. Create/Edit the Subject's Lesson JS file (e.g., `mathLessons.js`).
2. Add a new property: `window.mathLessonX = \` ... HTML CONTENT ... \`;`.
3. Edit the Subject's `index.html`.
4. Add a sidebar item: `<div class="lesson-item" onclick="showLesson(X)">Lesson Name</div>`.
5. Update the `showLesson(num)` switch case in the `index.html` script to render `window.mathLessonX`.

---

## 6. "Physics" Reference Implementation
The **Physics** (and Math) UI is the gold standard for this project.

**Core Files:**
- `Term 1/Physics/index.html` (Structure & Styles).
- `styles/futuristic.css` (Global theme).

**Key UI Components (CSS Classes):**
- `.card`: Glassmorphic container.
- `.lesson-header`: Title gradient text.
- `.definition`: Blue left-border box.
- `.explanation`: Pink left-border box.
- `.formula-box`: Centered, gradient background for MathJax.
- `.note`: Yellow warning box.
- `.example`: Green accent box.
- `.keywords-table`: Gradient header table for translation.

---

## 7. Data Flow & Chatbot

### Chatbot (Manhagko AI)
- **Files:** `scripts/ai-system.js`.
- **Logic:** Client-side fetch to OpenRouter API.
- **Identity:** System prompt hardcoded in JS ("انت مساعد تعليمي ذكي...").
- **Key Rotation:** A list of ~15 API keys is exposed in the frontend code and rotated client-side to avoid rate limits.

### Contributions
- **Files:** `contributions.html`, `scripts/drive-init.js`.
- **Logic:**
    1. **Auth:** Google OAuth (Implicit/Popup flow).
    2. **Upload:** Direct POST to Google Drive API.
    3. **Metadata:** Appended to a specific Google Sheet (`1ZelbflNOHGWDfDfjBtHNdBwXqYXWG29wkTBv_dVfAOs`).
    4. **Read:** Fetches JSON from Google Sheets API.
- **Legacy/Local:** `app.py` has a Flask version of this logic, but it is **not used** by the active `contributions.html`.

---

## 8. Risk List

1.  **Security (Critical):** API keys for OpenRouter and Google Client configuration are exposed in client-side JavaScript. Anyone can steal the OpenRouter keys.
2.  **Deployment Mismatch:** The project contains a Python backend (`app.py`) but is configured as a static site for Netlify. The Flask backend is effectively dead code in production.
3.  **Content Fragility:** Storing lesson content as giant HTML strings inside JS files is error-prone and hard to maintain (no syntax highlighting for the HTML inside JS).
4.  **Google Integration:** Relies on third-party cookies and popup permissions. Popups often blocked by browsers.

---

## 9. Change Plan Template

**Before implementing any new feature:**

- [ ] **Locate Target Files:** Identify if change is Global (`styles/`, `scripts/`) or Subject-specific (`Term 1/Math/`).
- [ ] **Check Compatibility:** Ensure new HTML structures match the "Physics" CSS classes (`.card`, `.formula-box`) to maintain consistency.
- [ ] **Content Injection:** If adding content, follow the `window.lessonX` pattern in JS files.
- [ ] **Navigation Update:** Did you update the Sidebar TOC in the respective `index.html`?
- [ ] **MathJax:** If adding equations, use `$$` delimiters and call `MathJax.typesetPromise()` if content is loaded dynamically.
- [ ] **Mobile Check:** Verify layout on `< 768px` viewport (Sidebar toggling).
