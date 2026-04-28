'use client'
import { useEffect } from 'react'
import SpaceCanvas       from '@/components/ui/SpaceCanvas'
import Cursor            from '@/components/ui/Cursor'
import Loader            from '@/components/ui/Loader'
import Nav               from '@/components/ui/Nav'
import Hero              from '@/components/sections/Hero'
import Universe          from '@/components/sections/Universe'
import ImmersiveUniverse from '@/components/sections/ImmersiveUniverse'
import Contact           from '@/components/sections/Contact'
import SiteFooter        from '@/components/ui/SiteFooter'

export default function Page() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv,.rv-l,.rv-r,.rv-s')
    const io  = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="noise-overlay" />
      <SpaceCanvas />
      <Cursor />
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Universe />
        <ImmersiveUniverse />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
