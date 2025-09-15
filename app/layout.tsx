import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "César Miravete Zarazaga - Matemático & Analista de Datos",
  description:
    "César Miravete Zarazaga, matemático especializado en análisis de datos, Python, R y MATLAB. Consultor junior con experiencia en modelado estadístico y machine learning.",
  keywords: [
    "César Miravete Zarazaga",
    "César Miravete",
    "matemático",
    "analista de datos",
    "Python",
    "R",
    "MATLAB",
    "SQL",
    "machine learning",
    "estadística",
    "Universidad de Zaragoza",
    "consultor datos",
    "tutor matemáticas",
  ],
  authors: [{ name: "César Miravete Zarazaga" }],
  creator: "César Miravete Zarazaga",
  publisher: "César Miravete Zarazaga",
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
    locale: "es_ES",
    url: "https://cesar-miravete.vercel.app",
    siteName: "César Miravete Zarazaga - Portfolio",
    title: "César Miravete Zarazaga - Matemático & Analista de Datos",
    description:
      "Portfolio profesional de César Miravete Zarazaga, matemático especializado en análisis de datos y machine learning.",
    images: [
      {
        url: "/professional-mathematician-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "César Miravete Zarazaga - Matemático y Analista de Datos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "César Miravete Zarazaga - Matemático & Analista de Datos",
    description: "Portfolio profesional de César Miravete Zarazaga, matemático especializado en análisis de datos.",
    images: ["/professional-mathematician-portrait.jpg"],
  },
  alternates: {
    canonical: "https://cesar-miravete.vercel.app",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "César Miravete Zarazaga",
              jobTitle: "Matemático & Analista de Datos",
              description:
                "Matemático especializado en análisis de datos, Python, R y MATLAB. Consultor junior con experiencia en modelado estadístico y machine learning.",
              url: "https://cesar-miravete.vercel.app",
              image: "https://cesar-miravete.vercel.app/professional-mathematician-portrait.jpg",
              sameAs: ["https://linkedin.com/in/cesar-miravete", "https://github.com/cesar-miravete"],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Universidad de Zaragoza",
              },
              knowsAbout: [
                "Matemáticas",
                "Análisis de Datos",
                "Python",
                "R",
                "MATLAB",
                "SQL",
                "Machine Learning",
                "Estadística",
                "Modelado Matemático",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Consultor Independiente",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
