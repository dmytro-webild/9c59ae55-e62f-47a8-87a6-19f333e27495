import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Top Man Clothing - Indian Men\'s Ethnic Wear',
  description: 'Discover exquisite Indian ethnic wear for men at Top Man Clothing. Shop traditional kurtas, sherwanis, and jackets with modern designs and premium quality.',
  keywords: ["Indian ethnic wear, men's fashion, kurtas, sherwanis, bandhgala, traditional clothing, ethnic fashion, Top Man Clothing"],
  openGraph: {
    "title": "Top Man Clothing - Indian Men's Ethnic Wear",
    "description": "Discover exquisite Indian ethnic wear for men at Top Man Clothing. Shop traditional kurtas, sherwanis, and jackets with modern designs and premium quality.",
    "url": "https://www.topmanclothing.com",
    "siteName": "Top Man Clothing",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/indian-man-city-male-traditional-turban-hinduist-summer-city_1157-41030.jpg",
        "alt": "Man in elegant Indian kurta"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Top Man Clothing - Indian Men's Ethnic Wear",
    "description": "Discover exquisite Indian ethnic wear for men at Top Man Clothing. Shop traditional kurtas, sherwanis, and jackets with modern designs and premium quality.",
    "images": [
      "http://img.b2bpic.net/free-photo/indian-man-city-male-traditional-turban-hinduist-summer-city_1157-41030.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
