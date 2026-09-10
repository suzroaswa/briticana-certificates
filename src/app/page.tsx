import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-slate-800">
          Briticana Certificate System
        </h1>
        <p className="text-lg text-slate-600">
          Generate official internship certificates with PDF417 barcode, 
          download as PDF/JPG, and share directly to LinkedIn.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/certificate-template.html"
            className="px-8 py-4 bg-blue-900 text-white rounded-xl font-semibold text-lg hover:bg-blue-800 transition"
          >
            Open Certificate Generator →
          </Link>
        </div>
        <div className="mt-12 text-left bg-white p-6 rounded-2xl shadow-sm text-sm text-slate-700 space-y-2">
          <p className="font-semibold text-slate-900">Features included:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Admin form: Name, Internship Name, Tenure</li>
            <li>Auto Reference ID (BRIT-YYYY-XXXX)</li>
            <li>Exact design match to your demo certificate</li>
            <li>PDF417 barcode encoding Name + Ref + Briticana + Internship + Tenure</li>
            <li>Download as PDF</li>
            <li>Download as JPG</li>
            <li>LinkedIn Post (pre-filled celebration text)</li>
            <li>Share LinkedIn Certificate (official Add to Profile form)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
