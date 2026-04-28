'use client'
import { motion } from 'framer-motion'

const METRICS = [
  { v:'99.9%', l:'Uptime SLA',        sub:'5-year production tenure',           c:'#00ff9d' },
  { v:'100%',  l:'On-Time Deliveries', sub:'Emergency & weekend included',        c:'#9b6dff' },
  { v:'30%',   l:'Release Acceleration',sub:'Via CI/CD pipeline optimisation',   c:'#00f5ff' },
  { v:'60+',   l:'Automations Built',  sub:'Across 10+ client environments',      c:'#e8b84b' },
  { v:'25%',   l:'Cost Reduction',     sub:'Infrastructure optimisation',         c:'#ff4fa3' },
  { v:'10+',   l:'Client Awards',      sub:'Cross-team recognition 2022–2024',    c:'#4fa3e0' },
]

export default function Achievements() {
  return (
    <section className="section" style={{ paddingTop:120, paddingBottom:120, borderTop:'1px solid var(--border)' }}>
      <div className="wrap">
        <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.7 }} style={{ marginBottom:72 }}>
          <div className="s-tag">05 / Results</div>
          <h2 style={{ fontFamily:'var(--font-d)', fontSize:'clamp(48px,7vw,96px)', lineHeight:.9, letterSpacing:'.02em' }}>
            BY THE<br/><span className="gradient-text">NUMBERS</span>
          </h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2, background:'rgba(255,255,255,0.03)' }} className="max-md:grid-cols-2 max-sm:grid-cols-1">
          {METRICS.map((m, i) => (
            <motion.div key={i}
              initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }} transition={{ duration:.6,delay:i*.07,ease:[.16,1,.3,1] }}
              style={{
                background:'var(--bg)', padding:'52px 40px',
                cursor:'default', transition:'background .2s',
                borderLeft:`3px solid transparent`,
              }}
              onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.background='rgba(255,255,255,0.03)'; el.style.borderLeftColor=m.c }}
              onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.background='var(--bg)'; el.style.borderLeftColor='transparent' }}
            >
              <div style={{
                fontFamily:'var(--font-d)', fontWeight:800,
                fontSize:'clamp(52px,6vw,88px)', lineHeight:.9,
                color:m.c, marginBottom:16,
                textShadow:`0 0 40px ${m.c}60`,
                letterSpacing:'-.01em',
              }}>
                {m.v}
              </div>
              <div style={{ height:1, width:40, background:m.c, opacity:.4, marginBottom:14 }} />
              <div style={{ fontFamily:'var(--font-b)', fontWeight:600, fontSize:14, color:'var(--white)', marginBottom:4 }}>{m.l}</div>
              <div style={{ fontFamily:'var(--font-m)', fontSize:9, letterSpacing:'.15em', color:'var(--muted)' }}>{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
