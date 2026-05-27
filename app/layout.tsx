import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  title: { default: "Worgurn | Full-Stack Developer", template: "%s | Portfolio" },
  description: "Portfolio of Worgurn - Full-Stack Developer specializing in Next.js, TypeScript & Web Utilities.",
  keywords: ["Full-Stack Developer", "Next.js", "TypeScript", "Cybersecurity", "Portfolio"],
  authors: [{ name: "Worgurn", url: "https://github.com/superworgurn" }],
  openGraph: { type: "website", locale: "th_TH", url: "https://yourdomain.com", siteName: "Worgurn Portfolio", title: "Worgurn | Full-Stack Developer" },
  twitter: { card: "summary_large_image", title: "Worgurn | Full-Stack Developer" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children} 
      </body>
    </html>
  );
}