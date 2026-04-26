'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '#terminal', label: 'About' },
  { href: '#skills',   label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#infra',    label: 'Infra' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-subtle' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-2xl text-gold tracking-widest text-glow-gold">
          SSP
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted hover:text-gold transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Status pill */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-green border border-green/20 px-3 py-1.5 rounded-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          Available
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-mono text-gold text-xs tracking-widest"
          onClick={() => setOpen(!open)}
        >
          {open ? '[ CLOSE ]' : '[ MENU ]'}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-subtle bg-bg/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {LINKS.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-xs tracking-[0.2em] uppercase text-muted hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
