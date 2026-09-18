import type { Metadata } from "next";
import { Kalam, Architects_Daughter, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import DarkToggle from "@/components/DarkToggle";

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
});

const architects = Architects_Daughter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-architects",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Bayu | Software Engineering Portfolio",
  description:
    "Personal portfolio of Bayu — Software Engineering student building resilient networks, POS systems with facial recognition, and public transit apps.",
  keywords: [
    "Bayu",
    "Portfolio",
    "Software Engineer",
    "Network Infrastructure",
    "Next.js",
    "TypeScript",
    "Laravel",
    "OpenCV",
    "Kasir Pingkal",
  ],
  authors: [{ name: "Bayu" }],
  openGraph: {
    title: "Bayu | Software Engineering Portfolio",
    description:
      "Personal portfolio of Bayu — Software Engineering student building resilient networks, POS systems with facial recognition, and public transit apps.",
    type: "website",
    locale: "en_US",
    siteName: "Bayu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayu | Software Engineering Portfolio",
    description:
      "Personal portfolio of Bayu — Software Engineering student building resilient networks, POS systems with facial recognition, and public transit apps.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Bayu",
  "jobTitle": "Software Engineering Student & IT Specialist",
  "url": "https://github.com/bayuaaar12",
  "sameAs": ["https://github.com/bayuaaar12"],
  "knowsAbout": [
    "Software Engineering",
    "Network Infrastructure",
    "Next.js",
    "Laravel",
    "Python",
    "OpenCV",
    "Kotlin"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kalam.variable} ${architects.variable} ${inter.variable} ${spaceMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between selection:bg-[#FDE68A] selection:text-black">
        <ThemeProvider>
          {children}
          <DarkToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
