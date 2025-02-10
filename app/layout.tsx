import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ese Monday - Software Engineer, DevRel, Technical Writer & Content Creator",
  description: "Software Engineer, Developer Relations, Technical Writer, and Content Creator specializing in Web3 and Frontend Development with 3+ years of professional experience.",
  keywords: "Software Engineer, Developer Relations, DevRel, Technical Writer, Content Creator, Web3, Blockchain, Smart Contracts, DeFi, NFTs, Frontend Developer, React, Firebase, Web Development, HTML5, CSS3, JavaScript, React.js, Vue.js, Technical Documentation, Developer Experience, Developer Community, Content Strategy, Technical Content, Educational Content, Developer Advocacy, Open Source, FOSS",
  authors: [{ name: "Ese Monday" }],
  openGraph: {
    title: "Software Engineer, DevRel & Technical Writer",
    description: "Software Engineer, Developer Relations, Technical Writer, and Content Creator specializing in Web3 and Frontend Development. Check out selected projects and more.",
    url: "https://www.esemonday.xyz/",
    siteName: "Ese Monday",
    images: [
      {
        url: "/public/homepage.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ese Monday - Software Engineer, DevRel & Technical Writer",
    description: "Software Engineer, Developer Relations, Technical Writer, and Content Creator specializing in Web3 and Frontend Development. Check out selected projects and more.",
    site: "@EseMonday1",
    images: ["/homepage.png"],
  },
  other: {
    "linkedin:owner": "https://www.linkedin.com/in/ese-monday/",
    "fb:pages": "https://web.facebook.com/ese.monday.5",
  },
  alternates: {
    canonical: "https://www.esemonday.xyz/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}