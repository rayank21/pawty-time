import type { Metadata } from "next";
import { Fredoka, Nunito, Patrick_Hand } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-patrick",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pawty Time - La box d'anniversaire pour chiens et chats",
  description: "Offrez une box d'anniversaire 100% française et artisanale à votre compagnon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${fredoka.variable} ${nunito.variable} ${patrickHand.variable} antialiased font-sans bg-offwhite text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
