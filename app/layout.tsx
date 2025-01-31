import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/nav";
import "./globals.css";
// import "./styles/01.scss";
import FacebookPixel from "./components/facebookPixel";
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
    "Unlimited Graphic Design & Web Development. 7 Day Free Trial - Latino Web Studio",
  description:
    "From theme updates hosting, DNS, server management to SEO, email marketing and custom designs, we handle all your technical needs.",
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
        <meta
          name="description"
          content="From theme updates hosting, DNS, server management to SEO, email marketing and custom designs, we handle all your technical needs."
        />
        <meta
          property="og:image"
          content="assets/Unlimited-Graphic-Design-Web-Development.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <FacebookPixel />
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
