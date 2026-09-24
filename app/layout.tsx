import type React from "react"
import type { Metadata, Viewport } from "next"
import { Noto_Serif_KR } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-noto-serif-kr",
})

const title = "김우분 어머님·할머님 추도 예배"
const description = "가족과 함께 고(故) 김우분 어머님·할머님의 사랑과 은혜를 기억하는 추도 예배입니다."
const shareImage = {
  url: "/share-memorial.png",
  width: 1200,
  height: 630,
  alt: "김우분 어머님·할머님 추도 예배 — 함께 모여 사랑과 은혜를 기억합니다.",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://memorial-service-omega.vercel.app"),
  title,
  description,
  applicationName: "추도 예배",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "김우분 어머님·할머님 추도 예배",
    title,
    description,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#F8F3E9",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-serif ${notoSerifKR.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
