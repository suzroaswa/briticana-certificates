import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Briticana Certificate System",
  description: "Official internship certificate generator for Briticana - PDF, JPG, LinkedIn sharing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
