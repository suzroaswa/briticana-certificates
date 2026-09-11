import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-3xl font-bold text-slate-800">
          Briticana Certificate System
        </h1>
        <p className="text-slate-600">
          Create and share official internship certificates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/index.html"
            className="px-8 py-4 bg-blue-900 text-white rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Admin – Create Certificate
          </Link>
        </div>
        <p className="text-sm text-slate-500 mt-8">
          After creating a certificate you get a unique link to share with the intern.
          The intern sees the exact certificate + Download PDF / JPG / LinkedIn Post / Add Certificate.
        </p>
      </div>
    </main>
  );
}
