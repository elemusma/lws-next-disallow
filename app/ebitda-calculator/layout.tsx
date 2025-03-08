import { Metadata } from "next";
import { Company, Website } from "../components/globals";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `EBITDA Calculator - What Is Your Business Worth? - ${Company}`,
    description: "Built by Tadeo Martinez. Investor. Entrepreneur. Programmer.",
    openGraph: {
      title: `EBITDA Calculator - What Is Your Business Worth? - ${Company}`,
      description:
        "Built by Tadeo Martinez. Investor. Entrepreneur. Programmer.",
      url: `https://${Website}/ebitda-calculator`,
      type: "website",
      images: [
        {
          url: "/photos/ebitda-calculator.jpg",
          width: 1200,
          height: 630,
          alt: "EBITDA Calculator - What Is Your Business Worth?",
        },
      ],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
