# Briticana Certificate System

Official certificate generator for Briticana remote internships.

## How it works

1. **Admin** opens `/index.html` (or root after deploy)
2. Enters Candidate Name, Internship Name, Tenure
3. Clicks **Generate Shareable Certificate Link**
4. Copies the unique link and sends it to the intern
5. Intern opens the link → sees the exact certificate + 4 buttons:
   - Download PDF
   - Download JPG
   - LinkedIn Post (pre-filled text)
   - Add LinkedIn Certificate (official Add to Profile)

## Key features

- Exact visual match to official Briticana Certificate of Participation
- PDF417 barcode contains: Name | Reference ID | Briticana | Internship | Tenure
- **Reference ID is only visible when scanning the barcode** (not printed on the certificate face)
- Fully client-side – no database required for basic use
- Ready for Vercel / GitHub

## Local testing

```bash
# Simple static server
cd public
python3 -m http.server 3456
```
Then open http://localhost:3456/index.html

Or with Next.js:
```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this folder to GitHub
2. Import project in Vercel
3. Framework: Next.js (or Other if you only want the static HTML)
4. Deploy

After deploy the admin is at: `https://your-domain.vercel.app/index.html`
