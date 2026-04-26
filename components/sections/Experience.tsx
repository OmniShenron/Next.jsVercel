'use client'
import { motion } from 'framer-motion'
import { EXPERIENCE } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-cyan mb-3">
            /career/timeline
          </div>
          <h2 className="font-display text-[clamp(32px,5vw,60px)] text-white tracking-wide">
            EXPERIENCE
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[100px] md:left-[140px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-subtle to-transparent" />

          <div className="space-y-16">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.15 }}
                className="relative flex gap-8 md:gap-12"
              >
                {/* Left: period */}
                <div className="w-[90px] md:w-[130px] flex-shrink-0 text-right pt-1">
                  <div className="font-mono text-[9px] tracking-widest text-muted uppercase leading-5">
                    {job.period.split('—').map((p, j) => (
                      <div key={j}>{p.trim()}</div>
                    ))}
                  </div>
                  <div className="font-display text-xl text-gold mt-1">{job.duration}</div>
                </div>

                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold glow-gold" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border border-gold/30 animate-pulse" />
                  <div className="w-px opacity-0">|</div>
                </div>

                {/* Right: content */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <h3 className="font-display text-[clamp(22px,3vw,32px)] text-white tracking-wide leading-tight">
                      {job.role}
                    </h3>
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-cyan border border-cyan/20 px-2 py-0.5">
                      {job.type}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted mb-5">
                    {job.company}
                  </div>

                  <div className="space-y-2">
                    {job.highlights.map((h, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + j * 0.06 }}
                        className="flex gap-3 items-start"
                      >
                        <span className="text-gold/50 font-mono text-xs mt-0.5 flex-shrink-0">▸</span>
                        <span className="font-body text-[14px] text-white/50 leading-relaxed">{h}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
