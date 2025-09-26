import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skinfluence Skinstitute – Elina Schuurman",
  description:
    "Ontspannende massages & huidverbeterende gezichtsbehandelingen. Premium salon van Elina Schuurman.",
  openGraph: {
    title: "Skinfluence Skinstitute – Elina Schuurman",
    description:
      "Premium salon voor ontspanning en huidverbetering in Nederland.",
    url: "https://skinfluenceskinstitute.nl",
    siteName: "Skinfluence Skinstitute",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}

