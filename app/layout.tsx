import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/nav";
import "./globals.css";
// import "./styles/01.scss";
import "./styles/btn.scss";
import "./styles/fonts.scss";
import "./styles/home.scss";
// import "./styles/layout.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Unlimited Web Development & SEO. 7 Day Free Trial - Latino Web Studio",
  description:
    "From theme updates hosting, DNS, server management to SEO, email marketing and custom designs, we handle all your technical needs.",
  openGraph: {
    title: "Unlimited Web Development & SEO - Latino Web Studio",
    description:
      "From theme updates hosting, DNS, server management to SEO, email marketing and custom designs, we handle all your technical needs.",
    images: [
      {
        url: "/assets/Unlimited-Graphic-Design-Web-Development.jpg",
        width: 1200,
        height: 630,
        alt: "Latino Web Studio Services",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="assets/Favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
