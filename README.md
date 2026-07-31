# portfolio
# Swetha — Portfolio

**Live site:** https://swetha-portfolio-yaaa.vercel.app


A personal portfolio built from scratch as a single-page site — no frameworks, no build step, just HTML/CSS/JavaScript. It showcases every project from [github.com/swetha-mehtre](https://github.com/swetha-mehtre), publications, certifications, and achievements, with live demo links wherever a project could be deployed.

---

## ✨ Features

- **Dual themes** — a dark "gold/chrome" theme and a light "brushed silver" theme (high-contrast, not flat white), toggled with the pill switch in the nav bar and persisted via `localStorage`
- **Animated hero** — particle-network canvas background, gradient "poster frame" border, rotating tagline, floating skill badges, typed-out name effect
- **Netflix-style project rows** — all 20 GitHub repos grouped into horizontally-scrolling rows by category (AI/ML, Web App, Data Analytics/BI, Systems/Performance), with search and category filtering
- **3D tilt project cards** — mouse-tracked perspective tilt and a dynamic light-glare effect on hover, plus a "Featured" ribbon on flagship projects
- **Honest status badges** — every project card is labeled with its real state: ✅ live demo, ⚙ needs an external service/credential, 📊 data-only deliverable, or 🗂 duplicate/superseded — nothing is hidden or oversold
- **Highlights row** — publications, certifications, and achievements pulled together as scrollable cards, each linking to its DOI/verification page or LinkedIn as a fallback
- **Fully responsive**, reveal-on-scroll animations throughout

## 🛠️ Tech Stack

Plain **HTML5**, **CSS3** (custom properties/theming, no preprocessor), and **vanilla JavaScript** (no frameworks, no bundler). Fonts loaded from Google Fonts (Sora + Inter).

## 📁 Project Structure

```
site/
├── index.html      # Page structure/sections
├── style.css        # All styling, theme variables, animations
├── script.js        # Rendering logic (reads data.js, builds the DOM)
├── data.js           # All content — bio, skills, experience, projects, etc.
└── assets/
    └── screenshots/  # Real screenshots of each project's own running interface
```

To update the site's content (bio, skills, project list, links), **only `data.js` needs editing** — the HTML/CSS/JS are content-agnostic.

## 🚀 Running Locally

No build step, no dependencies. Just serve the folder:

```bash
# Python
python -m http.server 8899

# or Node
npx serve .
```

Then open `http://localhost:8899`.

## 🧩 Featured Projects

| Project | Status | Live Demo |
|---|---|---|
| [SMART AI — Multimodal Disease Prediction](https://github.com/swetha-mehtre/SMART-AI-MULTIMODAL-EARLY-DISEASE-PREDICTOR-APPLICATION) | Flagship — 97.6% diagnostic accuracy | Needs live DB/OAuth setup |
| [TripAI — Travel Trip Planner](https://github.com/swetha-mehtre/travel_planner) | ✅ Fixed & live | [Demo](https://swetha-travel-planner-km0xtsj1m-yaaa.vercel.app) |
| [ProAssessment.io](https://github.com/swetha-mehtre/pro-assessment-platform) | ✅ Fixed & live | [Demo](https://swetha-pro-assessment-o8km43al4-yaaa.vercel.app) |
| [Supply Chain Analytics](https://github.com/swetha-mehtre/supplychainAnalysis) | ✅ Verified end-to-end | [Demo](https://swetha-supplychain-analysis-yaaa.vercel.app) |
| [OpenAI Red Teaming Challenge](https://github.com/swetha-mehtre/OpenAI-s_Red_Teaming_Challenge--Kaggle) | 🥉 Kaggle Bronze Medal | — |

*(See the site itself for the full list of 20 projects with descriptions, tech stacks, and links.)*

## 📄 Publications

- **Multimodal AI for Early Disease Detection** — IRJMETS, Vol. 07, Issue 12, Dec 2025. [DOI: 10.56726/IRJMETS88035](https://doi.org/10.56726/IRJMETS88035)

## 🏆 Achievements

- Kaggle Bronze Medalist — Red Teaming Dataset Challenge
- Hackathon Coordinator — HackFusion 1.0 & Hack4Mysore (1,000+ attendees)

## 📬 Contact

- **Email:** swethamehtre@gmail.com
- **GitHub:** [github.com/swetha-mehtre](https://github.com/swetha-mehtre)
- **LinkedIn:** [linkedin.com/in/swetha-6619442a9](https://www.linkedin.com/in/swetha-6619442a9/)

---

*Built and maintained by Swetha. Open to Software Engineer / Data Analyst roles.*
