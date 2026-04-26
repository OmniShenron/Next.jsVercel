'use client'
import { motion } from 'framer-motion'
import { PERSON, STATS, TECH_MARQUEE } from '@/lib/data'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen grid-bg flex flex-col overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green/3 blur-[160px] pointer-events-none" />

      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* ── LEFT: TEXT ── */}
          <div>
            <motion.div {...fade(0.1)} className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-green text-glow-green">
                System Online
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
                Hyderabad, IN
              </span>
            </motion.div>

            <motion.h1 {...fade(0.2)} className="font-display text-[clamp(52px,8vw,96px)] leading-none tracking-wide text-white mb-2 animate-glitch">
              SHANMUKHA
            </motion.h1>
            <motion.h1 {...fade(0.3)} className="font-display text-[clamp(52px,8vw,96px)] leading-none tracking-wide text-gold text-glow-gold mb-6">
              SAI PRANEETH
            </motion.h1>

            <motion.div {...fade(0.4)} className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold/40" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted">
                DevOps · SRE · 5 Years
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-gold/20 to-transparent" />
            </motion.div>

            <motion.p {...fade(0.5)} className="font-body text-[15px] leading-relaxed text-white/50 max-w-md mb-10">
              {PERSON.summary}
            </motion.p>

            {/* STATS */}
            <motion.div {...fade(0.6)} className="grid grid-cols-3 gap-px bg-subtle mb-10 border border-subtle">
              {STATS.slice(0, 3).map(s => (
                <div key={s.label} className="bg-bg px-4 py-4 group hover:bg-surface transition-colors">
                  <div className={`font-display text-3xl tracking-wide ${
                    s.color === 'green' ? 'text-green text-glow-green' :
                    s.color === 'cyan'  ? 'text-cyan text-glow-cyan'  : 'text-gold text-glow-gold'
                  }`}>
                    {s.value}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.7)} className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="font-mono text-[11px] tracking-[0.2em] uppercase px-6 py-3 bg-gold text-bg hover:bg-gold/90 transition-colors"
              >
                Hire Me
              </a>
              <a
                href="#terminal"
                className="font-mono text-[11px] tracking-[0.2em] uppercase px-6 py-3 border border-subtle text-muted hover:border-gold/40 hover:text-gold transition-all"
              >
                View Profile
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: AVATAR ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center items-center relative"
          >
            {/* Orbital rings */}
            <div className="absolute w-[440px] h-[440px] rounded-full border border-gold/10 animate-spin-slow" />
            <div className="absolute w-[520px] h-[520px] rounded-full border border-dashed border-cyan/8 animate-spin-reverse" />
            <div className="absolute w-[360px] h-[360px] rounded-full border border-green/8" />

            {/* Orbit dot */}
            <div className="absolute w-[440px] h-[440px] rounded-full animate-spin-slow pointer-events-none">
              <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-gold glow-gold -translate-x-1/2" />
            </div>

            {/* Ambient glow behind avatar */}
            <div className="absolute w-72 h-72 rounded-full bg-gold/8 blur-[60px] animate-pulse-gold" />

            {/* Video frame */}
            <div className="relative bracket w-72 h-[380px] md:w-80 md:h-[420px] border-neon-gold overflow-hidden scanline-overlay">
              {/* Corner coords */}
              <div className="absolute top-2 left-2 font-mono text-[8px] text-gold/50 tracking-widest z-10">X:340 Y:280</div>
              <div className="absolute bottom-2 right-2 font-mono text-[8px] text-gold/50 tracking-widest z-10">LOCK:ON</div>

              <video
                src={PERSON.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover brightness-90 contrast-110"
              />

              {/* Scanline overlay handled by CSS */}
            </div>

            {/* Floating HUD labels */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-4 top-1/4 bg-surface border border-subtle px-3 py-2 font-mono text-[9px] tracking-widest uppercase"
            >
              <span className="text-green">◉</span>
              <span className="text-muted ml-2">99.9% UPTIME</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-4 bottom-1/4 bg-surface border border-subtle px-3 py-2 font-mono text-[9px] tracking-widest uppercase"
            >
              <span className="text-cyan">◉</span>
              <span className="text-muted ml-2">5 YRS EXP</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div className="relative z-10 border-t border-b border-subtle py-4 bg-surface/50 overflow-hidden">
        <div className="flex gap-16 animate-marquee w-max">
          {[...TECH_MARQUEE, ...TECH_MARQUEE].map((t, i) => (
            <span key={i} className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted whitespace-nowrap flex items-center gap-4">
              {t}
              <span className="text-gold/40">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
