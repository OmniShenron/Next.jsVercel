'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '@/lib/data'

const COLOR: Record<string, string> = {
  gold:  'from-gold to-gold/60',
  cyan:  'from-cyan to-cyan/60',
  green: 'from-green to-green/60',
}
const TEXT: Record<string, string> = {
  gold:  'text-gold',
  cyan:  'text-cyan',
  green: 'text-green',
}
const BORDER: Record<string, string> = {
  gold:  'border-gold/20 hover:border-gold/40',
  cyan:  'border-cyan/20 hover:border-cyan/40',
  green: 'border-green/20 hover:border-green/40',
}

function SkillCard({ cat, inView }: { cat: typeof SKILLS[0], inView: boolean }) {
  return (
    <div className={`bg-surface border ${BORDER[cat.color]} p-6 transition-all duration-300 hover:bg-card group`}>
      <div className="flex items-center gap-3 mb-5">
        <span className={`font-mono text-xl ${TEXT[cat.color]}`}>{cat.icon}</span>
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/70">
          {cat.category}
        </span>
      </div>
      <div className="space-y-3">
        {cat.items.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-mono text-[11px] tracking-widest text-muted group-hover:text-white/60 transition-colors">
                {skill.name}
              </span>
              <span className={`font-mono text-[10px] ${TEXT[cat.color]}`}>{skill.level}%</span>
            </div>
            <div className="h-[2px] bg-subtle rounded-sm overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${COLOR[cat.color]} rounded-sm transition-all duration-[1400ms] ease-out`}
                style={{
                  width: inView ? `${skill.level}%` : '0%',
                  transitionDelay: `${i * 120}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-24 px-6 border-t border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-end justify-between gap-8"
        >
          <div>
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold mb-3">
              /skills/stack
            </div>
            <h2 className="font-display text-[clamp(32px,5vw,60px)] text-white tracking-wide">
              TECHNICAL ARSENAL
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end gap-1">
            <div className="font-mono text-[9px] tracking-widest text-muted uppercase">Proficiency Index</div>
            <div className="flex gap-2 items-center">
              <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-cyan" />
              <span className="font-mono text-[9px] text-muted">0──────100</span>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-subtle">
          {SKILLS.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <SkillCard cat={cat} inView={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
