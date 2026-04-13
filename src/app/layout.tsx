import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_URL } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Baserabuilders | Premium Construction & Interior Design in Bangalore",
    template: "%s | Baserabuilders Bangalore",
  },
  description:
    "Baserabuilders is Bangalore's trusted premium construction and interior design company. 12+ years experience, 150+ projects completed. Residential, commercial, modular kitchens & full renovation. Get a free quote today.",
  keywords: [
    "construction company Bangalore",
    "interior design Bangalore",
    "residential construction Bangalore",
    "commercial construction Bangalore",
    "home renovation Bangalore",
    "modular kitchen Bangalore",
    "false ceiling design Bangalore",
    "building contractor Bangalore",
    "home construction HSR Layout Bangalore",
    "best construction company Bangalore",
  ],
  authors: [{ name: "Baserabuilders", url: SITE_URL }],
  creator: "Baserabuilders",
  publisher: "Baserabuilders",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Baserabuilders",
    title:
      "Baserabuilders | Premium Construction & Interior Design in Bangalore",
    description:
      "Bangalore's trusted premium construction and interior design company. 12+ years, 150+ projects. Residential, commercial, modular kitchens & renovation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Baserabuilders — Premium Construction & Interior Design in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Baserabuilders | Premium Construction & Interior Design in Bangalore",
    description:
      "Bangalore's trusted premium construction and interior design company. 12+ years, 150+ projects.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// LocalBusiness JSON-LD structured data for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "Baserabuilders",
  alternateName: "Basera Builders",
  description:
    "Premium construction and interior design company in Bangalore offering residential construction, commercial construction, interior design, modular kitchens, renovation, and false ceiling solutions.",
  url: SITE_URL,
  telephone: "+919035817133",
  email: "info@baserabuilders.in",
  foundingDate: "2014",
  address: {
    "@type": "PostalAddress",
    streetAddress: "HSR Layout, Sector 7",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560102",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9121,
    longitude: 77.6446,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "₹₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Bank Transfer, UPI",
  areaServed: [
    { "@type": "City", name: "Bangalore" },
    { "@type": "State", name: "Karnataka" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction & Interior Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Construction",
          description:
            "Custom-built homes designed to your lifestyle in Bangalore.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Construction",
          description:
            "Office spaces, retail outlets, and commercial complexes in Bangalore.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Design",
          description:
            "Elegant interior design solutions for homes and offices in Bangalore.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Renovation & Remodeling",
          description:
            "Home and commercial renovation services in Bangalore.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Modular Kitchen",
          description:
            "Custom modular kitchen design and installation in Bangalore.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "False Ceiling & Lighting",
          description:
            "Designer false ceiling and integrated lighting solutions in Bangalore.",
        },
      },
    ],
  },
  sameAs: [
    "https://instagram.com/baserabuilders",
    "https://facebook.com/baserabuilders",
    "https://linkedin.com/company/baserabuilders",
    "https://youtube.com/@baserabuilders",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
