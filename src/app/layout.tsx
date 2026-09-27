import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "SriRam Travels | Best Tour Packages & Holiday Deals in India",
  description:
    "Book the best holiday tour packages at SriRam Travels. 2500+ guided tours to domestic and international destinations. Toll free: 1800-313-5555",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
