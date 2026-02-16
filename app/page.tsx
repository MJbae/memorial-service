"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Minus, Plus, Heart, Music, BookOpen, User, Users } from "lucide-react"

export default function MemorialService() {
  const [fontSize, setFontSize] = useState(3)

  useEffect(() => {
    const savedSize = localStorage.getItem("memorial-font-size")
    if (savedSize) {
      setFontSize(Number.parseInt(savedSize))
    }
  }, [])

  const changeFontSize = (delta: number) => {
    const newSize = Math.max(1, Math.min(5, fontSize + delta))
    setFontSize(newSize)
    localStorage.setItem("memorial-font-size", newSize.toString())
  }

  // Dynamic font size classes mapping
  const fs = {
    h1: { 1: "text-2xl", 2: "text-3xl", 3: "text-4xl", 4: "text-5xl", 5: "text-6xl" },
    h2: { 1: "text-xl", 2: "text-2xl", 3: "text-3xl", 4: "text-4xl", 5: "text-5xl" },
    h3: { 1: "text-lg", 2: "text-xl", 3: "text-2xl", 4: "text-3xl", 5: "text-4xl" },
    body: { 1: "text-base", 2: "text-lg", 3: "text-xl", 4: "text-2xl", 5: "text-3xl" },
    small: { 1: "text-sm", 2: "text-base", 3: "text-lg", 4: "text-xl", 5: "text-2xl" },
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Fixed Header for Controls */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between px-4 h-16 max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">추도예배</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary/50 rounded-full p-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => changeFontSize(-1)}
              disabled={fontSize === 1}
              className="h-8 w-8 rounded-full"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-xs font-medium w-8 text-center tabular-nums">
              {fontSize}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => changeFontSize(1)}
              disabled={fontSize === 5}
              className="h-8 w-8 rounded-full"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-4 space-y-8 mt-4">
        {/* Intro Section */}
        <div className="text-center py-10 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            2026년 2월 17일
          </div>
          <h1 className={`${fs.h1[fontSize as keyof typeof fs.h1]} font-bold text-foreground leading-tight`}>
            고(故) 김우분 어머님<br />
            추도 예배
          </h1>
          <p className={`${fs.body[fontSize as keyof typeof fs.body]} text-muted-foreground`}>
            가족과 함께하는<br />
            감사와 사랑의 시간
          </p>
        </div>

        {/* 1. Opening */}
        <SectionCard
          step={1}
          title="대표 기도"
          subtitle="기도 인도: 배성근"
          icon={User}
          fontSize={fontSize}
          fs={fs}
        >
          <div className="space-y-6">
            <RoleBadge role="leader" fontSize={fontSize} customText="배성근" />
            <p className={`${fs.body[fontSize as keyof typeof fs.body]} leading-relaxed`}>
              (대표 기도자가 기도로 예배를 엽니다.)
            </p>
          </div>
        </SectionCard>

        {/* 2. Hymn */}
        <SectionCard
          step={2}
          title="함께 찬양"
          subtitle="찬송가 28장 - 복의 근원 강림하사"
          icon={Music}
          fontSize={fontSize}
          fs={fs}
        >
          <RoleBadge role="all" fontSize={fontSize} />
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

        {/* 3. Scripture */}
        <SectionCard
          step={3}
          title="성경 봉독"
          subtitle="전도서 3장 1-14절"
          icon={BookOpen}
          fontSize={fontSize}
          fs={fs}
        >
          <div className="space-y-2 mb-6 text-muted-foreground text-center">
            <p className={`${fs.small[fontSize as keyof typeof fs.small]}`}>인도자와 함께 교독합니다</p>
          </div>

          <div className={`space-y-6 ${fs.body[fontSize as keyof typeof fs.body]} leading-loose`}>
            <div className="space-y-2">
              <RoleBadge role="leader" fontSize={fontSize} />
              <p>범사에 기한이 있고 천하 만사가 다 때가 있나니</p>
            </div>
            <div className="space-y-2 text-right">
              <RoleBadge role="all" fontSize={fontSize} />
              <p>날 때가 있고 죽을 때가 있으며 심을 때가 있고 심은 것을 뽑을 때가 있으며</p>
            </div>
            <div className="space-y-2">
              <RoleBadge role="leader" fontSize={fontSize} />
              <p>죽일 때가 있고 치료할 때가 있으며 헐 때가 있고 세울 때가 있으며</p>
            </div>
            <div className="space-y-2 text-right">
              <RoleBadge role="all" fontSize={fontSize} />
              <p>울 때가 있고 웃을 때가 있으며 슬퍼할 때가 있고 춤출 때가 있으며</p>
            </div>
            <div className="space-y-2">
              <RoleBadge role="leader" fontSize={fontSize} />
              <p>돌을 던져 버릴 때가 있고 돌을 거둘 때가 있으며 안을 때가 있고 안는 일을 멀리 할 때가 있으며</p>
            </div>
            <div className="space-y-2 text-right">
              <RoleBadge role="all" fontSize={fontSize} />
              <p>찾을 때가 있고 잃을 때가 있으며 지킬 때가 있고 버릴 때가 있으며</p>
            </div>
            <div className="space-y-2">
              <RoleBadge role="leader" fontSize={fontSize} />
              <p>찢을 때가 있고 꿰맬 때가 있으며 잠잠할 때가 있고 말할 때가 있으며</p>
            </div>
            <div className="space-y-2 text-right">
              <RoleBadge role="all" fontSize={fontSize} />
              <p>사랑할 때가 있고 미워할 때가 있으며 전쟁할 때가 있고 평화할 때가 있느니라</p>
            </div>
            <div className="space-y-2">
              <RoleBadge role="leader" fontSize={fontSize} />
              <p>일하는 자가 그의 수고로 말미암아 무슨 이익이 있으랴</p>
            </div>
            <div className="space-y-2 text-right">
              <RoleBadge role="all" fontSize={fontSize} />
              <p>하나님이 인생들에게 노고를 주사 애쓰게 하신 것을 내가 보았노라</p>
            </div>
            <div className="space-y-2">
              <RoleBadge role="leader" fontSize={fontSize} />
              <p>하나님이 모든 것을 지으시되 때를 따라 아름답게 하셨고 또 사람들에게는 영원을 사모하는 마음을 주셨느니라 그러나 하나님이 하시는 일의 시종을 사람으로 측량할 수 없게 하셨도다</p>
            </div>
            <div className="space-y-2 text-right">
              <RoleBadge role="all" fontSize={fontSize} />
              <p>사람들이 사는 동안에 기뻐하며 선을 행하는 것보다 더 나은 것이 없는 줄을 내가 알았고</p>
            </div>
            <div className="space-y-2">
              <RoleBadge role="leader" fontSize={fontSize} />
              <p>사람마다 먹고 마시는 것과 수고함으로 낙을 누리는 그것이 하나님의 선물인 줄도 또한 알았도다</p>
            </div>
            <div className="space-y-2 text-right">
              <RoleBadge role="all" fontSize={fontSize} />
              <p>하나님께서 행하시는 모든 것은 영원히 있을 것이라 그 위에 더 할 수도 없고 그것에서 덜 할 수도 없나니 하나님이 이같이 행하심은 사람들이 그의 앞에서 경외하게 하려 하심인 줄을 내가 알았도다</p>
            </div>
          </div>

          <div className={`mt-8 space-y-4 ${fs.body[fontSize as keyof typeof fs.body]}`}>
            <p className="font-medium text-primary">말씀 나눔</p>
            <p className="leading-relaxed">
              어머님이 우리에게 보여주신 사랑을 기억하며, 우리 형제 자매들도 서로 깊이 사랑하고 화목하게 지내는 것이 어머님이 가장 기뻐하시는 일일 것입니다.<br />
              잠시 각자의 가정과 삶을 돌아보며 감사하는 시간을 갖겠습니다.
            </p>
          </div>
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
          <RoleBadge role="all" fontSize={fontSize} />
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
        <p className="text-sm">사랑으로 하나되는 가족</p>
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
  subtitle: string
  icon: any
  children: React.ReactNode
  fontSize: number
  fs: any
}) {
  return (
    <Card className="overflow-hidden border-none shadow-md">
      <div className="bg-secondary/50 p-4 flex items-center gap-3 border-b border-secondary">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
          {step}
        </div>
        <div className="flex-1">
          <h2 className={`${fs.h3[fontSize as keyof typeof fs.h3]} font-bold text-primary`}>{title}</h2>
          <p className={`${fs.small[fontSize as keyof typeof fs.small]} text-muted-foreground`}>{subtitle}</p>
        </div>
        <Icon className="w-5 h-5 text-muted-foreground/50" />
      </div>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  )
}

function RoleBadge({ role, fontSize, customText }: { role: "leader" | "all", fontSize: number, customText?: string }) {
  const isLeader = role === "leader"
  const text = customText || (isLeader ? "인도자" : "다같이")
  const Icon = isLeader ? User : Users

  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium ${isLeader
      ? "bg-primary/10 text-primary border border-primary/20"
      : "bg-muted text-muted-foreground border border-transparent"
      }`}>
      <Icon className="w-3.5 h-3.5" />
      <span>{text}</span>
    </div>
  )
}
