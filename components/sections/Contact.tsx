'use client'
import { motion } from 'framer-motion'
import { PERSON } from '@/lib/data'

const LINKS = [
  { icon: '@', label: 'Email', value: PERSON.email, href: `mailto:${PERSON.email}`, color: 'gold' },
  { icon: '☎', label: 'Phone', value: PERSON.phone, href: `tel:${PERSON.phone}`,   color: 'cyan' },
  { icon: '↗', label: 'Website', value: 'shanmukhasaipraneeth.vercel.app', href: PERSON.website, color: 'green' },
  { icon: '⌖', label: 'Location', value: PERSON.location, href: null,              color: 'gold' },
]

const BORDER: Record<string, string> = {
  gold:  'hover:border-gold/40',
  cyan:  'hover:border-cyan/40',
  green: 'hover:border-green/40',
}
const TEXT: Record<string, string> = {
  gold:  'text-gold',
  cyan:  'text-cyan',
  green: 'text-green',
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
              /contact/init
            </div>
            <h2 className="font-display text-[clamp(40px,6vw,80px)] text-white tracking-wide leading-none mb-6">
              LET'S BUILD<br />
              <span className="text-gold text-glow-gold">RELIABLE</span><br />
              SYSTEMS
            </h2>
            <p className="font-body text-[15px] text-white/40 leading-relaxed max-w-sm">
              Open to DevOps, SRE, and Infrastructure roles. Let's architect something that scales.
            </p>

            {/* Status */}
            <div className="mt-10 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-green">Available for new roles</span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-2"
          >
            {LINKS.map((l, i) => {
              const Comp = l.href ? 'a' : 'div'
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <Comp
                    {...(l.href ? { href: l.href, target: l.href.startsWith('http') ? '_blank' : undefined } : {})}
                    className={`flex items-center gap-5 p-5 bg-surface border border-subtle ${BORDER[l.color]} transition-all duration-300 group block`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className={`w-10 h-10 border border-subtle flex items-center justify-center font-mono text-lg ${TEXT[l.color]} group-hover:bg-${l.color}/5 transition-colors flex-shrink-0`}>
                      {l.icon}
                    </div>
                    <div>
                      <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted mb-1">
                        {l.label}
                      </div>
                      <div className={`font-body text-[14px] text-white/70 group-hover:text-white transition-colors`}>
                        {l.value}
                      </div>
                    </div>
                    {l.href && (
                      <div className={`ml-auto ${TEXT[l.color]} opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs`}>
                        →
                      </div>
                    )}
                  </Comp>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
