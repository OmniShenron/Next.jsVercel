'use client'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-subtle">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold mb-3">
            /projects/featured
          </div>
          <h2 className="font-display text-[clamp(32px,5vw,60px)] text-white tracking-wide">
            PROJECTS
          </h2>
        </motion.div>

        <div className="space-y-2">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="grid md:grid-cols-[120px_1fr_280px] bg-surface border border-subtle hover:border-gold/30 transition-all duration-300 group overflow-hidden"
            >
              {/* Number */}
              <div className="flex items-center justify-center bg-card border-r border-subtle p-8 group-hover:bg-surface transition-colors">
                <span className="font-display text-6xl text-gold/20 group-hover:text-gold/40 transition-colors">
                  {p.id}
                </span>
              </div>

              {/* Info */}
              <div className="p-8 border-r border-subtle">
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted mb-2">
                  {p.type}
                </div>
                <h3 className="font-display text-[clamp(24px,3vw,38px)] text-white tracking-wide mb-4">
                  {p.name}
                </h3>
                <p className="font-body text-[14px] text-white/45 leading-relaxed mb-5 max-w-lg">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map(s => (
                    <span
                      key={s}
                      className="font-mono text-[9px] tracking-widest uppercase border border-subtle px-2 py-1 text-muted group-hover:border-gold/20 group-hover:text-white/50 transition-all"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="p-8 flex flex-col justify-center gap-4">
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted mb-1">
                  Impact
                </div>
                {p.impact.map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-green text-xs">◉</span>
                    <span className="font-mono text-[11px] tracking-widest text-white/60 group-hover:text-white/80 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
