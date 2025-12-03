import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "БИЧИЛ ГЛОБУС - Санхүүгийн цогц шийдэл",
  description: "Таны бизнесийг дэлхийд холбох санхүүгийн түнш",
  icons: {
    icon: "/bichillogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn"> {/* en-ийг mn болгож солив */}
      <body
        className={`${manrope.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}