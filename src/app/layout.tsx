import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { Montserrat } from "next/font/google"
import { Dosis } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({subsets: ['latin']})
const dosis = Dosis({subsets: ['latin']})
const nunito = Nunito({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
