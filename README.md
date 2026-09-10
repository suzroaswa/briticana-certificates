# Briticana Certificate System

Official certificate generator for Briticana remote internships.

## Features

1. **Admin Form**
   - Candidate Name
   - Internship Name
   - Tenure (e.g. "3 months")
   - Auto-generated Reference ID (`BRIT-2026-XXXX`)

2. **Certificate Design**
   - Exact match to the official Briticana Certificate of Participation
   - Double navy border
   - Blackletter title
   - Watermark + official logo
   - Signature of Project Head
   - PDF417 barcode that encodes:
     ```
     NAME:...|REF:BRIT-...|ORG:Briticana|INTERNSHIP:...|TENURE:...
     ```

3. **Four Action Buttons**
   - Download as PDF
   - Download as JPG
   - LinkedIn Post (pre-filled celebration text)
   - Share LinkedIn Certificate (opens official LinkedIn "Add to Profile" form for Licenses & Certifications)

## How to use (local)

```bash
cd briticana-certificates
npm install
npm run dev
```

Then open http://localhost:3000 and click "Open Certificate Generator"

Or open the standalone version directly:
http://localhost:3000/certificate-template.html

## Deploy to Vercel

```bash
npx vercel
```

Or connect the GitHub repo to Vercel (you already have Vercel connected).

## Tech

- Next.js (App Router)
- Pure HTML/CSS/JS certificate renderer for pixel-perfect control + easy CDN libraries
- PDF417 via pdf417-generator
- html2canvas + jsPDF for downloads
- Official LinkedIn share & Add-to-Profile URLs

## Next improvements (optional)

- Persistent storage of issued certificates (Vercel KV / Supabase)
- Public verification page `/verify/[ref]`
- Password-protected admin
- Bulk generation
