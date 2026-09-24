"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Minus, Plus, Music, BookOpen, User, Users, type LucideIcon } from "lucide-react"

export default function MemorialService() {
  const [fontSize, setFontSize] = useState(3)

  useEffect(() => {
    try {
      const savedSize = Number(localStorage.getItem("memorial-font-size"))
      if (Number.isInteger(savedSize) && savedSize >= 1 && savedSize <= 5) {
        setFontSize(savedSize)
      }
    } catch {
      // Font controls still work when browser storage is unavailable.
    }
  }, [])

  const changeFontSize = (delta: number) => {
    const newSize = Math.max(1, Math.min(5, fontSize + delta))
    setFontSize(newSize)
    try {
      localStorage.setItem("memorial-font-size", newSize.toString())
    } catch {
      // Keep the selected size for this visit even if it cannot be saved.
    }
  }

  // Dynamic font size classes mapping
  const fs = {
    h1: { 1: "text-3xl", 2: "text-4xl", 3: "text-5xl", 4: "text-6xl", 5: "text-7xl" },
    h2: { 1: "text-2xl", 2: "text-3xl", 3: "text-4xl", 4: "text-5xl", 5: "text-6xl" },
    h3: { 1: "text-xl", 2: "text-2xl", 3: "text-3xl", 4: "text-4xl", 5: "text-5xl" },
    body: { 1: "text-lg", 2: "text-xl", 3: "text-2xl", 4: "text-3xl", 5: "text-4xl" },
    small: { 1: "text-base", 2: "text-lg", 3: "text-xl", 4: "text-2xl", 5: "text-3xl" },
  }

  return (
    <div className="memorial-page min-h-screen pb-12">
      {/* Fixed Header for Controls */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between px-4 h-16 max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">추석 추도예배</span>
          </div>
          <div className="flex items-center gap-1 bg-secondary rounded-full p-1" role="group" aria-label="글자 크기 조절">
            <Button
              variant="ghost"
              size="icon"
              aria-label="글자 크기 줄이기"
              onClick={() => changeFontSize(-1)}
              disabled={fontSize === 1}
              className="h-11 w-11 rounded-full text-primary"
            >
              <Minus className="h-5 w-5" />
            </Button>
            <span className="text-sm font-medium text-center tabular-nums" aria-live="polite" aria-atomic="true">
              글자 {fontSize}/5
            </span>
            <Button
              variant="ghost"
              size="icon"
              aria-label="글자 크기 키우기"
              onClick={() => changeFontSize(1)}
              disabled={fontSize === 5}
              className="h-11 w-11 rounded-full text-primary"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-4 space-y-8 mt-4">
        {/* A quiet harvest moon above the family service. */}
        <div className="memorial-intro text-center">
          <div className="harvest-scene" aria-hidden="true">
            <div className="harvest-moon" />
            <svg className="harvest-grass" viewBox="0 0 300 160" fill="none">
              <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M38 159Q70 107 64 32M55 160Q95 105 107 58M238 160Q214 105 233 39M255 160Q237 121 264 87" />
                <path d="M64 44q-20-4-19-19q17 2 19 19Zm1 17q20-7 17-21q-16 5-17 21Zm-1 15q-23-3-23-18q18 1 23 18Zm-3 17q22-7 21-22q-18 4-21 22ZM103 73q-17-4-16-17q15 3 16 17Zm-6 19q21-2 23-16q-16 0-23 16ZM230 55q-16-10-12-23q14 7 12 23Zm-3 20q22-3 24-18q-18 1-24 18Zm0 18q-20-6-19-21q17 3 19 21Zm4 20q22-8 19-22q-17 5-19 22ZM254 109q-14-9-10-21q13 6 10 21Z" fill="currentColor" fillOpacity=".18" />
              </g>
            </svg>
          </div>
          <p className={`season-label ${fs.small[fontSize as keyof typeof fs.small]}`}>2026년 추석 · 한가위</p>
          <h1 className={`${fs.h1[fontSize as keyof typeof fs.h1]} mt-6 font-semibold text-foreground leading-snug`}>
            <span className="block">고(故) 김우분</span>
            <span className="block">어머님·할머님</span>
            <span className="block mt-3 text-primary">추도 예배</span>
          </h1>
          <div className="intro-divider" aria-hidden="true"><span /></div>
          <p className={`${fs.body[fontSize as keyof typeof fs.body]} text-muted-foreground leading-relaxed`}>
            함께 모인 한가위,<br />
            사랑과 은혜를 기억합니다.
          </p>
        </div>
        <div className="order-divider" aria-hidden="true"><span />예배 순서<span /></div>

        {/* 1. Opening */}
        <SectionCard
          step={1}
          title="대표 기도"
          icon={User}
          fontSize={fontSize}
          fs={fs}
        >
          <div className="space-y-6">
            <RoleBadge role="leader" customText="배성근" fontSize={fontSize} fs={fs} />
            <p className={`${fs.body[fontSize as keyof typeof fs.body]} leading-relaxed`}>
              기도로 예배를 엽니다.
            </p>
          </div>
        </SectionCard>

        {/* 2. Hymn */}
        <SectionCard
          step={2}
          title="함께 찬양"
          subtitle="찬송가 - 복의 근원 강림하사"
          icon={Music}
          fontSize={fontSize}
          fs={fs}
        >
          <RoleBadge role="all" fontSize={fontSize} fs={fs} />
          <div className={`mt-6 space-y-8 lyrics-text ${fs.body[fontSize as keyof typeof fs.body]}`}>
            <div>
              <span className="text-primary font-bold mr-2">1.</span>
              복의 근원 강림하사 찬송하게 하소서<br />
              한량없이 자비하심 측량할 길 없도다<br />
              천사들의 찬송가를 내게 가르치소서<br />
              구속하신 그 사랑을 항상 찬송합니다
            </div>
            <div>
              <span className="text-primary font-bold mr-2">2.</span>
              주의 크신 도움받아 이때까지 왔으니<br />
              이와 같이 천국에도 이르기를 바라네<br />
              하나님의 품을 떠나 죄에 빠진 우리를<br />
              예수 구원하시려고 보혈 흘려주셨네
            </div>
            <div>
              <span className="text-primary font-bold mr-2">3.</span>
              주의 귀한 은혜받고 일생 빚진 자 되네<br />
              주의 은혜 사슬되사 나를 주께 매소서<br />
              우리 맘은 연약하여 범죄하기 쉬우니<br />
              하나님이 받으시고 천국 인을 치소서 아멘
            </div>
          </div>
        </SectionCard>

        {/* 3. Message — the scripture passage has not been selected. */}
        <SectionCard
          step={3}
          title="말씀"
          icon={BookOpen}
          fontSize={fontSize}
          fs={fs}
        >
          <RoleBadge role="leader" customText="강영아" fontSize={fontSize} fs={fs} />
          <p className={`mt-6 ${fs.body[fontSize as keyof typeof fs.body]} leading-relaxed`}>
            함께 말씀을 듣습니다.
          </p>
        </SectionCard>

        {/* 4. Closing */}
        <SectionCard
          step={4}
          title="마침 기도"
          subtitle="주기도문"
          icon={User}
          fontSize={fontSize}
          fs={fs}
        >
          <RoleBadge role="all" fontSize={fontSize} fs={fs} />
          <div className={`mt-6 space-y-2 text-center leading-loose ${fs.body[fontSize as keyof typeof fs.body]}`}>
            <p>하늘에 계신 우리 아버지,</p>
            <p>아버지의 이름을 거룩하게 하시며</p>
            <p>아버지의 나라가 오게 하시며,</p>
            <p>아버지의 뜻이 하늘에서와 같이</p>
            <p>땅에서도 이루어지게 하소서.</p>
            <div className="h-4" />
            <p>오늘 우리에게 일용할 양식을 주시고,</p>
            <p>우리가 우리에게 잘못한 사람을</p>
            <p>용서하여 준 것 같이</p>
            <p>우리 죄를 용서하여 주시고,</p>
            <div className="h-4" />
            <p>우리를 시험에 빠지지 않게 하시고,</p>
            <p>악에서 구하소서.</p>
            <div className="h-4" />
            <p className="font-semibold text-primary">
              나라와 권능과 영광이<br />
              영원히 아버지의 것입니다. 아멘.
            </p>
          </div>
        </SectionCard>
      </main>

      <footer className="py-12 text-center text-muted-foreground">
        <p className={`${fs.small[fontSize as keyof typeof fs.small]}`}>사랑으로 하나되는 가족</p>
      </footer>
    </div>
  )
}

function SectionCard({
  step,
  title,
  subtitle,
  icon: Icon,
  children,
  fontSize,
  fs
}: {
  step: number
  title: string
  subtitle?: string
  icon: LucideIcon
  children: React.ReactNode
  fontSize: number
  fs: any
}) {
  return (
    <Card className="service-card overflow-hidden">
      <div className="bg-secondary/50 p-4 sm:p-6 flex items-start gap-3 border-b border-border">
        <div className={`flex items-center justify-center shrink-0 min-w-10 min-h-10 p-1 rounded-full bg-primary text-primary-foreground font-bold ${fs.small[fontSize as keyof typeof fs.small]}`}>
          {step}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className={`${fs.h3[fontSize as keyof typeof fs.h3]} font-bold text-primary`}>{title}</h2>
          {subtitle && <p className={`${fs.small[fontSize as keyof typeof fs.small]} text-muted-foreground`}>{subtitle}</p>}
        </div>
        <Icon className="w-5 h-5 shrink-0 mt-2 text-primary" aria-hidden="true" />
      </div>
      <CardContent className="p-4 sm:p-6">
        {children}
      </CardContent>
    </Card>
  )
}

function RoleBadge({ role, fontSize, fs, customText }: { role: "leader" | "all", fontSize: number, fs: any, customText?: string }) {
  const isLeader = role === "leader"
  const text = customText || (isLeader ? "인도자" : "다같이")
  const Icon = isLeader ? User : Users

  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium ${fs.small[fontSize as keyof typeof fs.small]
      } ${isLeader
        ? "bg-primary/10 text-primary border border-primary/20"
        : "bg-muted text-muted-foreground border border-transparent"
      }`}>
      <Icon className="w-3.5 h-3.5" />
      <span>{text}</span>
    </div>
  )
}
