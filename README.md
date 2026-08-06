# Kumaravel Santhorsh — Portfolio

A React + Vite + Tailwind CSS portfolio site.

## What's included
- **Home** — hero intro, stats, featured work, and a **Download CV** button
- **About** — background, drivers, experience highlights, current focus
- **Education** — degrees + certifications
- **Projects** — all 8 projects from the resume (EN2H, CyphLab, VerdantEye, Sales Order Management, Paint Shop x2, Clinic Management, Pharmacy Management), with category filters
- **Skills** — technical + soft skills, languages
- **Contact** — contact details, Download CV, and a real message form wired to a small backend (`/backend`) that saves + emails every submission (falls back to opening your email client if the backend isn't running)

## Getting started (frontend)
```bash
npm install
cp .env.example .env   # only needed if your backend isn't on localhost:5000
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build into /dist
npm run preview   # preview the production build
```

## Getting started (backend — powers the Contact form)
```bash
cd backend
npm install
cp .env.example .env
# edit .env: set TO_EMAIL, and optionally SMTP_* to enable actual emailing
npm start          # runs on http://localhost:5000
```
See `backend/README.md` for full details, including Gmail App Password setup.
Run the frontend (`npm run dev`) and backend (`npm start`, in a second terminal)
at the same time for the Contact form to work end-to-end locally.

If you deploy the frontend as a static site without the backend running,
the Contact form automatically falls back to opening the visitor's email
client instead — it never silently fails.

## Notes
- The CV at `public/Kumaravel_Santhorsh_CV.pdf` was generated from the resume text you provided.
  Swap in your own polished CV PDF (same filename) if you'd like the Download CV button to
  serve the original file instead.
- `src/assets/santhorsh.png` is currently a placeholder avatar (gradient "KS" monogram) because
  the uploaded profile photo wasn't accessible as a file in this environment. Replace it with your
  actual photo (same filename/path) to restore your headshot on the Home page.
- Update social links (GitHub/LinkedIn URLs) in `Navbar.jsx`, `Footer.jsx`, and `Contact.jsx` if needed.
- `backend/contacts.json` is created automatically the first time someone submits the form — it's
  your permanent local record of every message, independent of whether email sending is configured.
