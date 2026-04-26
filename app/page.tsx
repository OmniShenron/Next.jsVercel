'use client'

import Cursor from '@/components/ui/Cursor'
import Nav from '@/components/ui/Nav'
import Hero from '@/components/sections/Hero'
import Terminal from '@/components/sections/Terminal'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Infrastructure from '@/components/sections/Infrastructure'
import Projects from '@/components/sections/Projects'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main className="relative bg-bg">
      <Cursor />
      <Nav />
      <Hero />
      <Terminal />
      <Skills />
      <Experience />
      <Infrastructure />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
