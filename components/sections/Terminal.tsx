'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { PERSON, STATS } from '@/lib/data'

const LINES = [
  { delay: 0,    prompt: 'ssp@devops:~$', cmd: 'whoami', out: null },
  { delay: 400,  prompt: null, cmd: null, out: `${PERSON.name} — ${PERSON.title}` },
  { delay: 900,  prompt: 'ssp@devops:~$', cmd: 'cat /etc/profile', out: null },
  { delay: 1400, prompt: null, cmd: null, out: PERSON.summary },
  { delay: 2000, prompt: 'ssp@devops:~$', cmd: 'uptime --sla', out: null },
  { delay: 2500, prompt: null, cmd: null, out: `Availability: ${STATS[0].value} | Release Delta: -${STATS[1].value} | Automations: ${STATS[2].value}` },
  { delay: 3100, prompt: 'ssp@devops:~$', cmd: 'ls ~/stack/', out: null },
  { delay: 3600, prompt: null, cmd: null, out: 'Jenkins  Docker  Ansible  AWS  Nginx  Magento  Redis  RabbitMQ  Elasticsearch  Fastly' },
  { delay: 4200, prompt: 'ssp@devops:~$', cmd: 'echo $CONTACT', out: null },
  { delay: 4700, prompt: null, cmd: null, out: `${PERSON.email} | ${PERSON.phone} | ${PERSON.location}` },
  { delay: 5300, prompt: 'ssp@devops:~$', cmd: '', out: null, caret: true },
]

export default function Terminal() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [visible, setVisible] = useState<number[]>([])

  useEffect(() => {
    if (!inView) return
    LINES.forEach((l, i) => {
      setTimeout(() => setVisible(v => [...v, i]), l.delay)
    })
  }, [inView])

  return (
    <section id="terminal" ref={ref} className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Terminal window */}
        <div className="border border-subtle bg-surface rounded-none overflow-hidden glow-gold max-w-3xl">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-subtle">
            <div className="w-3 h-3 rounded-full bg-red/70" />
            <div className="w-3 h-3 rounded-full bg-gold/70" />
            <div className="w-3 h-3 rounded-full bg-green/70" />
            <span className="ml-4 font-mono text-[10px] text-muted tracking-widest uppercase">
              ssp@devops — bash — 80×24
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6 min-h-[360px] font-mono text-[13px] leading-7">
            {LINES.map((line, i) => (
              visible.includes(i) ? (
                <div key={i}>
                  {line.prompt && (
                    <div className="flex gap-2">
                      <span className="text-green text-glow-green">{line.prompt}</span>
                      <span className="text-white/80">{line.cmd}</span>
                      {line.caret && <span className="terminal-caret" />}
                    </div>
                  )}
                  {line.out && (
                    <div className="text-cyan/70 pl-0 mb-1 tracking-wide text-[12px]">
                      {line.out}
                    </div>
                  )}
                </div>
              ) : null
            ))}
          </div>
        </div>

        {/* Section label */}
        <div className="mt-6 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted">
            /about/profile
          </span>
          <div className="h-px flex-1 bg-subtle" />
        </div>
      </motion.div>
    </section>
  )
}
