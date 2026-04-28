'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '#universe',  label: 'Universe' },
  { href: '#skills',    label: 'Skills' },
  { href: '#journey',   label: 'Journey' },
  { href: '#vibes',     label: 'Vibes' },
  { href: '#contact',   label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
      className={`nav ${scrolled ? 'scrolled' : ''}`}
    >
      <a href="#" className="nav-logo">SSP</a>

      <ul className="nav-links" style={{ display: 'flex' }}>
        {LINKS.map(l => (
          <li key={l.href} className="hidden md:block">
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <div className="nav-status hidden md:flex">
          <div className="nav-status-dot" />
          Available
        </div>
        <a
          href="#contact"
          style={{
            fontFamily: 'var(--font-m)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase',
            padding: '10px 22px', background: 'rgba(155,109,255,0.15)',
            border: '1px solid rgba(155,109,255,0.35)', color: 'var(--white)',
            textDecoration: 'none', cursor: 'none',
            transition: 'background .3s, border-color .3s',
          }}
          className="hidden md:block"
          onMouseEnter={e => { (e.target as HTMLElement).style.background = 'rgba(155,109,255,0.3)' }}
          onMouseLeave={e => { (e.target as HTMLElement).style.background = 'rgba(155,109,255,0.15)' }}
        >
          Hire Me
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{ fontFamily: 'var(--font-d)', fontSize: 22, color: 'var(--white)', background: 'none', border: 'none', cursor: 'none' }}
        >
          {open ? '×' : '≡'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'rgba(3,1,10,0.96)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)', padding: '20px 24px',
              display: 'flex', flexDirection: 'column', gap: 16,
            }}
          >
            {LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ fontFamily: 'var(--font-m)', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
