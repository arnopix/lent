import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lent — Conseil en optimisation réseau & performance applicative",
  description:
    "Lent accompagne les entreprises dans l'optimisation de leurs infrastructures réseau et de leurs performances applicatives. Audit, conseil, implémentation. Paris, Lyon, Toulouse.",
  keywords: [
    "optimisation réseau",
    "performance applicative",
    "conseil IT",
    "audit réseau",
    "latence",
    "infrastructure cloud",
    "SD-WAN",
    "APM",
  ],
  authors: [{ name: "Lent" }],
  openGraph: {
    title: "Lent — Conseil en optimisation réseau & performance applicative",
    description:
      "Nous optimisons vos infrastructures réseau et vos applications pour garantir des performances maximales et une disponibilité totale.",
    url: "https://lent.fr",
    siteName: "Lent",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lent — Conseil en optimisation réseau & performance applicative",
    description:
      "Nous optimisons vos infrastructures réseau et vos applications pour garantir des performances maximales.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
