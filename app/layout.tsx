import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_KR } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-noto-serif-kr",
})

export const metadata: Metadata = {
  title: "고(故) 김우분 어머님・할머님 추석 추도 예배",
  description: "2026년 추석, 가족과 함께 고(故) 김우분 어머님・할머님의 사랑과 은혜를 기억하는 추도 예배",
  generator: "v0.app",
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
