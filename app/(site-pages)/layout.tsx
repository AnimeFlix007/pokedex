import "../globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import BottomNavigation from "../components/shared/BottomNavigation";
import Navbar from "../components/shared/Navbar";

const font = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Pokemon - Gotta Catch em all",
  description: "Pokemon - Gotta Catch em all",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/pokeball.png"></link>
      </head>
      <body className={font.className}>
        <Navbar />
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}