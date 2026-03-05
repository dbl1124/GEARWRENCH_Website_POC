import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const akrobat = localFont({
  src: [
    { path: "./fonts/AKROBAT-THIN.otf", weight: "100", style: "normal" },
    { path: "./fonts/AKROBAT-EXTRALIGHT.otf", weight: "200", style: "normal" },
    { path: "./fonts/AKROBAT-LIGHT.otf", weight: "300", style: "normal" },
    { path: "./fonts/AKROBAT-REGULAR.otf", weight: "400", style: "normal" },
    { path: "./fonts/AKROBAT-SEMIBOLD.otf", weight: "600", style: "normal" },
    { path: "./fonts/AKROBAT-BOLD.otf", weight: "700", style: "normal" },
    { path: "./fonts/AKROBAT-EXTRABOLD.otf", weight: "800", style: "normal" },
    { path: "./fonts/AKROBAT-BLACK.otf", weight: "900", style: "normal" }
  ],
  variable: "--font-akrobat",
});

export const metadata: Metadata = {
  title: "GearWrench POC",
  description: "Next.js modern POC for GearWrench",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={akrobat.variable}>
      <body className="font-sans antialiased text-brand-black">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
