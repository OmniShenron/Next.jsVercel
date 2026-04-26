'use client'
import { motion } from 'framer-motion'
import { ACHIEVEMENTS, STATS } from '@/lib/data'

export default function Achievements() {
  return (
    <section className="py-24 px-6 border-t border-subtle">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-cyan mb-3">
            /achievements/metrics
          </div>
          <h2 className="font-display text-[clamp(32px,5vw,60px)] text-white tracking-wide">
            NUMBERS
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-subtle">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-surface p-8 group hover:bg-card transition-colors cursor-default"
            >
              <div className="font-display text-[clamp(40px,6vw,72px)] text-gold text-glow-gold leading-none mb-2 group-hover:text-white transition-colors">
                {a.metric}
              </div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/70 mb-1">
                {a.label}
              </div>
              <div className="font-mono text-[9px] tracking-widest text-muted">
                {a.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-px bg-card border-t border-subtle grid grid-cols-2 md:grid-cols-5 divide-x divide-subtle"
        >
          {STATS.map(s => (
            <div key={s.label} className="px-6 py-4 flex items-center gap-3">
              <div className={`w-1 h-6 rounded-sm ${
                s.color === 'green' ? 'bg-green' :
                s.color === 'cyan'  ? 'bg-cyan'  : 'bg-gold'
              }`} />
              <div>
                <div className="font-display text-xl text-white">{s.value}</div>
                <div className="font-mono text-[9px] tracking-widest uppercase text-muted">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
