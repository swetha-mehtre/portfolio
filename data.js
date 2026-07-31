// Central content file — edit this to update the site without touching HTML/CSS/JS logic.
const PORTFOLIO_DATA = {
  name: "Swetha",
  initials: "S",
  tagline: "Software Engineer & Data Analyst",
  taglines: [
    "Software Engineer & Data Analyst",
    "Building ML pipelines that hit 97.6% accuracy",
    "Flask · REST APIs · MongoDB Atlas",
    "Kaggle Bronze Medalist 🥉",
    "Power BI · Tableau · SQL storytelling",
  ],
  location: "Bidar, Karnataka, India · Open to relocation",
  email: "swethamehtre@gmail.com",
  phone: "+91 8660137643",
  github: "https://github.com/swetha-mehtre",
  linkedin: "https://www.linkedin.com/in/swetha-6619442a9/",
  resumeFile: "", // TODO: put a resume PDF in site/assets/ and reference it here, e.g. "assets/resume.pdf"

  summary: `B.E. Computer Science & Engineering (Data Science) graduate from VTU (CGPA: 8.36/10) with three hands-on
  internships spanning software development, web development, and data/AI engineering, plus a Google-issued Data
  Analytics Professional Certificate. Builds and tests production-style applications in Python and Flask, integrates
  REST APIs and databases, and applies data structures, algorithms, and SDLC practices in cross-functional engineering
  teams. Kaggle Bronze Medalist. Seeking Software Engineer / Data Analyst roles to build scalable, production-grade
  software.`,

  skills: {
    "Languages & Frameworks": ["Python", "Flask", "REST APIs", "SQL (MySQL, PostgreSQL)", "OOP", "Data Structures & Algorithms", "JavaScript"],
    "Data & ML": ["Pandas", "NumPy", "Scikit-Learn", "XGBoost", "LightGBM", "Random Forest", "SVM", "Deep Learning", "YOLOv8/v11", "Keras ResNet-50"],
    "BI & Visualization": ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Excel (Advanced)"],
    "Platforms & Tools": ["MongoDB Atlas", "Firebase", "Git/GitHub", "Jupyter", "Google Colab", "OAuth 2.0"],
  },

  experience: [
    {
      role: "Data Analysis & AI Intern",
      org: "Spherenex Innovation and Technology Pvt. Ltd.",
      period: "Feb 2026 – May 2026",
      points: [
        "Trained and deployed YOLO/YOLOv8 computer vision models for object detection and face recognition.",
        "Built ETL pipelines in Python and Excel for data cleaning, transformation, and Firebase cloud integration, maintaining strict data-integrity standards.",
        "Delivered 3+ interactive Power BI dashboards and weekly EDA reports for stakeholder decision-making.",
      ],
    },
    {
      role: "Software Development Intern",
      org: "Gyaankulk Labs",
      period: "Apr 2025 – Oct 2025",
      points: [
        "Built a multimodal Flask-based application for the healthcare sector; wrote and tested backend code.",
        "Gained hands-on exposure integrating machine learning models into production workflows.",
        "Worked directly with engineers to debug application issues and ship features under real deadlines.",
      ],
    },
  ],

  education: {
    degree: "B.E. Computer Science & Engineering (Data Science)",
    school: "Maharaja Institute of Technology, Mysore (VTU)",
    period: "Dec 2022 – Jul 2026",
    detail: "CGPA: 8.36 / 10.0",
  },

  publications: [
    {
      title: "Multimodal AI for Early Disease Detection",
      venue: "International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)",
      detail: "Vol. 07, Issue 12, Dec 2025 (Published Jan 2026) · Paper ID: IRJMETS71200167793 · DOI: 10.56726/IRJMETS88035",
      verifyUrl: "https://doi.org/10.56726/IRJMETS88035",
      image: "", // TODO: paste your LinkedIn post screenshot here, e.g. "assets/screenshots/publication-irjmets.png"
    },
  ],

  // `image` is a screenshot of the certificate (e.g. from a LinkedIn post) and `verifyUrl` is the
  // issuer's official credential-verification link, if one exists. Both are optional — leave `image`
  // empty and the card just links out to LinkedIn or the issuer instead.
  certifications: [
    { name: "Google Data Analytics Professional Certificate", issuer: "Google (via Coursera)", date: "Jul 2026", image: "", verifyUrl: "" },
    { name: "AI Fundamentals", issuer: "IBM SkillsBuild", date: "Nov 2025", image: "", verifyUrl: "" },
    { name: "Deep Learning", issuer: "be10x", date: "Sep 2025", image: "", verifyUrl: "" },
    { name: "Power BI", issuer: "Office Master", date: "Oct 2024", image: "", verifyUrl: "" },
    { name: "Introduction to Data Science", issuer: "Cisco Networking Academy", date: "Dec 2024", image: "", verifyUrl: "" },
  ],

  achievements: [
    "Kaggle Bronze Medalist — Red Teaming Dataset Challenge, top-ranked globally for data quality, EDA depth, and analytical rigor.",
    "Hackathon Coordinator — led planning and logistics for HackFusion 1.0 & Hack4Mysore, two national 24-hour hackathons with 1,000+ attendees.",
  ],

  // EVERY GitHub repo (github.com/swetha-mehtre) is represented here — nothing hidden.
  // `badge` is an honest status line: live demo / verified working / needs external service /
  // data-only deliverable / duplicate-or-superseded. Only repos with a real screenshot of their
  // own running interface get an `image` — no stock/generic images are used.
  projects: [
    // ---- Fully working, fixed, and live ----
    {
      name: "travel_planner",
      title: "TripAI — Travel Trip Planner",
      category: "Web App",
      description: "React travel-planning app with interactive Leaflet maps, routing, and AI-assisted itinerary suggestions via the Groq SDK. Fixed and verified: builds/runs clean, live-hosted for anyone to try.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Leaflet", "Groq SDK"],
      url: "https://github.com/swetha-mehtre/travel_planner",
      liveUrl: "https://swetha-travel-planner-km0xtsj1m-yaaa.vercel.app",
      image: "assets/screenshots/travel_planner.png",
      featured: true,
      badge: "✅ Live demo",
    },
    {
      name: "pro-assessment-platform",
      title: "ProAssessment.io — Code Assessment Platform",
      category: "Web App",
      description: "React 19 + Vite coding-assessment platform with a Monaco code editor, live console output, and a sandboxed \"Run Code\" flow. Fixed a broken build (files were flattened outside src/) and a corrupted dependency install.",
      tech: ["React 19", "Vite", "Monaco Editor", "Tailwind CSS", "Docker"],
      url: "https://github.com/swetha-mehtre/pro-assessment-platform",
      liveUrl: "https://swetha-pro-assessment-o8km43al4-yaaa.vercel.app",
      image: "assets/screenshots/pro-assessment-platform.png",
      featured: true,
      badge: "✅ Live demo (Run Code needs a Judge0 API key for full execution)",
    },
    {
      name: "e-commerce-site",
      title: "MehTres — Skincare Storefront",
      category: "Web App",
      description: "Static e-commerce storefront with a product catalog and a real localStorage-backed cart (quantities/totals now actually work — previously Add to Cart just fired an alert()).",
      tech: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/swetha-mehtre/e-commerce-site",
      liveUrl: "https://swetha-mehtres-skincare-9mbdtvpfh-yaaa.vercel.app",
      image: "assets/screenshots/e-commerce-site.png",
      badge: "✅ Live demo",
    },
    {
      name: "youtube-song-suggester",
      title: "YouTube Mood-Based Song Suggester",
      category: "Web App",
      description: "Flask app that suggests YouTube songs — including Kannada tracks — based on a selected mood (Happy, Sad, Excited, Angry). Fixed a broken template path and removed an accidentally committed Python venv.",
      tech: ["Python", "Flask", "HTML"],
      url: "https://github.com/swetha-mehtre/youtube-song-suggester",
      image: "assets/screenshots/youtube-song-suggester.png",
      badge: "✅ Verified working locally",
    },
    {
      name: "supplychainAnalysis",
      title: "Supply Chain Analytics — DataCo",
      category: "Data Analytics/BI",
      description: "End-to-end analysis of 180K+ DataCo supply chain records, surfacing a 54.83% late-delivery rate, with feature engineering and a predictive model for delivery risk.",
      tech: ["Python", "Pandas", "Plotly", "Panel", "Scikit-learn"],
      url: "https://github.com/swetha-mehtre/supplychainAnalysis",
      image: "assets/screenshots/supplychainAnalysis.png",
      featured: true,
      badge: "✅ Verified — runs end-to-end, static report hosted",
    },
    {
      name: "movie-recommendation-system-EDA",
      title: "Movie Recommendation System — EDA",
      category: "AI/ML",
      description: "Exploratory data analysis on ~10,000 Netflix/TMDB movie records — rating distributions, popularity, and content growth trends over time.",
      tech: ["Python", "Pandas", "Matplotlib/Seaborn"],
      url: "https://github.com/swetha-mehtre/movie-recommendation-system-EDA",
      image: "assets/screenshots/movie-recommendation-system-EDA.png",
      badge: "✅ Verified — runs end-to-end, static report hosted",
    },
    {
      name: "power-bi-visualisation",
      title: "Sales Data Visualization Pipeline",
      category: "Data Analytics/BI",
      description: "Python data-cleaning and visualization pipeline preparing sales data for Power BI — interactive dashboards and relationship analysis across product/region/time. All 7 scripts actually execute end-to-end.",
      tech: ["Python", "Pandas", "Matplotlib"],
      url: "https://github.com/swetha-mehtre/power-bi-visualisation",
      image: "assets/screenshots/power-bi-visualisation.png",
      badge: "✅ Verified — all scripts run, charts hosted",
    },
    {
      name: "heart-disease-using-EDA",
      title: "Heart Disease Prediction — EDA",
      category: "AI/ML",
      description: "Exploratory data analysis on a heart disease dataset, examining relationships between clinical features and disease presence. Fixed a hardcoded Google Colab file path that broke local execution.",
      tech: ["Python", "Pandas", "Jupyter", "Matplotlib/Seaborn"],
      url: "https://github.com/swetha-mehtre/heart-disease-using-EDA",
      image: "assets/screenshots/heart-disease-using-EDA.png",
      badge: "✅ Fixed & verified — runs end-to-end",
    },
    {
      name: "edunet-ds-training",
      title: "Edunet Data Science Training",
      category: "AI/ML",
      description: "Day-by-day data science training notebooks from an Edunet training program, covering foundational Python/data-analysis exercises.",
      tech: ["Python", "Jupyter", "Pandas"],
      url: "https://github.com/swetha-mehtre/edunet-ds-training",
      badge: "✅ Verified — runs clean",
    },

    // ---- Flagship project — explicitly left untouched per owner's instruction ----
    {
      name: "SMART-AI-MULTIMODAL-EARLY-DISEASE-PREDICTOR-APPLICATION",
      title: "SMART AI — Multimodal Disease Prediction Platform",
      category: "AI/ML",
      description: "Ensemble ML pipeline (Random Forest, XGBoost, LightGBM, SVM) reaching 97.6% diagnostic accuracy across 42 disease categories from 132 symptom inputs and 4,920 patient records. Dual-engine OCR (EasyOCR + Tesseract), Flask REST API, MongoDB Atlas, Google OAuth 2.0.",
      tech: ["Python", "Flask", "XGBoost", "LightGBM", "Keras ResNet-50", "YOLOv11", "MongoDB Atlas", "EasyOCR", "OAuth 2.0"],
      url: "https://github.com/swetha-mehtre/SMART-AI-MULTIMODAL-EARLY-DISEASE-PREDICTOR-APPLICATION",
      featured: true,
      badge: "⚠ Code verified (compiles clean) — flagship project, kept untouched by request; full run needs a live DB/OAuth setup",
    },

    // ---- Code sound, needs an external service/credential/hardware this environment doesn't have ----
    {
      name: "BUG_DRAWER",
      title: "Bug Drawer — Bug Tracking Platform",
      category: "Web App",
      description: "Full-featured Flask bug-tracking/project-management system with Google/GitHub OAuth login, AI-generated avatars, role-based access control, and a dark/light UI.",
      tech: ["Python", "Flask", "OAuth 2.0", "Google GenAI API"],
      url: "https://github.com/swetha-mehtre/BUG_DRAWER",
      badge: "⚙ Code compiles clean — needs OAuth credentials + GenAI API key to run",
    },
    {
      name: "HIGH-PERFORMANCE-MATRIX-MULTIPLICATION",
      title: "High-Performance Matrix Multiplication",
      category: "Systems/Performance",
      description: "Comparative benchmark of matrix multiplication performance across sequential C++, OpenMP, MPI, and CUDA implementations, with a web frontend to visualize results.",
      tech: ["C++", "OpenMP", "MPI", "CUDA", "Python"],
      url: "https://github.com/swetha-mehtre/HIGH-PERFORMANCE-MATRIX-MULTIPLICATION",
      badge: "⚙ Source sound — needs a Linux/CUDA-GPU toolchain not available in this environment",
    },
    {
      name: "OpenAI-s_Red_Teaming_Challenge--Kaggle",
      title: "OpenAI Red Teaming Dataset Challenge (Kaggle)",
      category: "AI/ML",
      description: "Kaggle Bronze Medal submission for OpenAI's GPT-OSS-20B Red Teaming Hackathon — five documented LLM vulnerabilities (medical, cybersecurity, misinformation, deceptive alignment) with a reproducible findings dataset.",
      tech: ["Python", "Jupyter", "Pandas"],
      url: "https://github.com/swetha-mehtre/OpenAI-s_Red_Teaming_Challenge--Kaggle",
      badge: "🥉 Kaggle Bronze Medal — notebook requires the Kaggle competition environment to run",
      featured: true,
    },

    // ---- Data-only deliverables (Power BI / SQL / Excel — no code to execute, but real work) ----
    {
      name: "powerbi_amazon_sales_data",
      title: "Amazon Sales — Power BI Report",
      category: "Data Analytics/BI",
      description: "Power BI dashboard analyzing Amazon product sales, revenue, ratings, and seasonal trends with DAX measures and relational data modeling.",
      tech: ["Power BI", "DAX", "Excel"],
      url: "https://github.com/swetha-mehtre/powerbi_amazon_sales_data",
      badge: "📊 Data-only deliverable (view via README screenshots/video)",
    },
    {
      name: "Swiggy-Food-Anlysis-PowerBi-main",
      title: "Swiggy Food Analysis — Power BI",
      category: "Data Analytics/BI",
      description: "Power BI report analyzing Swiggy food-delivery data — KPIs like total customers, average order price, and delivery times by city.",
      tech: ["Power BI", "SQL", "Python"],
      url: "https://github.com/swetha-mehtre/Swiggy-Food-Anlysis-PowerBi-main",
      badge: "📊 Data-only deliverable (.pbix + dashboard screenshot in repo)",
    },
    {
      name: "olist-ecommerce-sql-analysis",
      title: "Olist E-commerce — SQL Analysis",
      category: "Data Analytics/BI",
      description: "SQL-based analysis of the Olist Brazilian e-commerce dataset — order volumes, customer behavior, and date-range queries.",
      tech: ["SQL"],
      url: "https://github.com/swetha-mehtre/olist-ecommerce-sql-analysis",
      badge: "📊 Data-only deliverable (well-formed SQL, no DB engine hosted)",
    },
    {
      name: "excel-data-prepration-cleaning-filtering-sorting-analysisng",
      title: "Excel Data Preparation & Analysis",
      category: "Data Analytics/BI",
      description: "Student dataset put through 8 core Excel operations: cleaning, filtering, sorting, and analysis.",
      tech: ["Excel"],
      url: "https://github.com/swetha-mehtre/excel-data-prepration-cleaning-filtering-sorting-analysisng",
      badge: "📊 Data-only deliverable",
    },
    {
      name: "my-portfolio",
      title: "Earlier Portfolio (v1)",
      category: "Web App",
      description: "An earlier static HTML/CSS personal portfolio with pages for about, education, resume, publications, and misc side projects.",
      tech: ["HTML", "CSS"],
      url: "https://github.com/swetha-mehtre/my-portfolio",
      badge: "🗂 Superseded by this portfolio",
    },

    // ---- Duplicates / superseded (still shown, honestly labeled — not hidden) ----
    {
      name: "Data-analytics-project",
      title: "Data Analytics Project (wrapper repo)",
      category: "Data Analytics/BI",
      description: "A wrapper repo bundling copies of the Swiggy Power BI, Excel prep, heart-disease EDA, and Olist SQL projects together.",
      tech: ["Python", "SQL", "Excel", "Power BI"],
      url: "https://github.com/swetha-mehtre/Data-analytics-project",
      badge: "🗂 Duplicate — bundles 4 other repos already listed individually",
    },
    {
      name: "Multimodal_Early_Desease_Predictor",
      title: "Multimodal Early Disease Predictor (v1)",
      category: "AI/ML",
      description: "Earlier, simpler Flask + Random Forest version of the disease-prediction concept, later expanded into SMART AI.",
      tech: ["Python", "Flask", "Scikit-learn"],
      url: "https://github.com/swetha-mehtre/Multimodal_Early_Desease_Predictor",
      badge: "🗂 Duplicate — earlier version of SMART AI (above)",
    },
  ],
};

// NOTE: edunet-training and e-commerce-skin- were intentionally left out of this list —
// both are empty GitHub repos with no real content, so they added nothing to show here.
// Consider deleting them from GitHub since they're not linked to anything above.
