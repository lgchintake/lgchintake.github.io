import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

const { seo, profile, socials } = portfolio;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: profile.name, url: seo.siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/icon-32.png", sizes: "32x32", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "profile",
    url: seo.siteUrl,
    siteName: profile.name,
    title: seo.title,
    description: seo.description,
    locale: "en_US",
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: `${profile.name} — ${profile.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0f17" },
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
  ],
  colorScheme: "light dark",
};

// Runs before first paint: applies saved theme (default light) and enables reveal animations.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}document.documentElement.classList.add('js');})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: seo.siteUrl,
  email: `mailto:${profile.email}`,
  image: `${seo.siteUrl}${profile.photo || "/images/profile-placeholder.svg"}`,
  sameAs: socials.filter((s) => s.url.startsWith("http")).map((s) => s.url),
  knowsAbout: ["Java", "Spring Boot", "Microservices", "Apache Kafka", "Blockchain", "Solidity", "Fintech"],
  hasCredential: portfolio.certifications.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c.name,
    url: c.verifyUrl,
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
