'use client'
import { motion } from 'framer-motion'

const JOBS = [
  {
    period: 'APR 2021 — JUN 2026', dur: '4.8 YRS',
    role: 'DEVOPS ENGINEER', co: 'Kensium Solutions',
    color: '#9b6dff',
    tags: ['Jenkins','AWS','Docker','Ansible','Fastly','New Relic','K6','Magento'],
    wins: ['99.9% uptime · All Prod envs','30% faster release cycles','60+ automations · 25% cost cut','Zero missed go-lives'],
  },
  {
    period: 'JAN 2020 — JUN 2020', dur: '6 MO',
    role: 'SYSTEM ENGINEER', co: 'Maavi',
    color: '#00f5ff',
    tags: ['Linux','Windows Server','Veeam','Avamar','Shell','NFS','SAMBA'],
    wins: ['24×7 NOC operations','15% downtime reduction'],
  },
]

export default function Timeline() {
  return (
    <section id="journey" className="section" style={{ paddingTop:120,paddingBottom:120,borderTop:'1px solid var(--border)' }}>
      <div className="wrap">
        <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.7 }} style={{ marginBottom:80 }}>
          <div className="s-tag">03 / Journey</div>
          <h2 style={{ fontFamily:'var(--font-d)',fontSize:'clamp(48px,7vw,96px)',lineHeight:.9,letterSpacing:'.02em' }}>
            CAREER<br/><span className="gradient-text">TIMELINE</span>
          </h2>
        </motion.div>

        <div style={{ position:'relative',paddingLeft:32 }}>
          <div className="timeline-line" />
          <div style={{ display:'flex',flexDirection:'column',gap:64 }}>
            {JOBS.map((job,i) => (
              <motion.div key={i}
                initial={{ opacity:0,y:40 }} whileInView={{ opacity:1,y:0 }}
                viewport={{ once:true }} transition={{ duration:.8,delay:i*.15,ease:[.16,1,.3,1] }}
                style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'start' }}
              >
                <div style={{ paddingLeft:32,position:'relative' }}>
                  <div className="timeline-dot" style={{ position:'absolute',left:-6,top:12,background:job.color,boxShadow:`0 0 16px ${job.color}, 0 0 32px ${job.color}55` }} />
                  <div style={{ fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.3em',textTransform:'uppercase',color:'var(--muted)',marginBottom:10 }}>{job.period}</div>
                  <div style={{ fontFamily:'var(--font-d)',fontSize:'clamp(28px,4vw,48px)',letterSpacing:'.02em',color:'var(--white)',lineHeight:.95,marginBottom:6 }}>{job.role}</div>
                  <div style={{ fontFamily:'var(--font-m)',fontSize:10,letterSpacing:'.2em',textTransform:'uppercase',color:job.color,marginBottom:20 }}>{job.co}</div>
                  <div style={{ display:'inline-flex',padding:'6px 16px',background:`${job.color}14`,border:`1px solid ${job.color}35`,fontFamily:'var(--font-d)',fontSize:20,color:job.color,letterSpacing:'.1em' }}>
                    {job.dur}
                  </div>
                </div>
                <div style={{ display:'flex',flexDirection:'column',gap:16 }}>
                  <div style={{ display:'flex',flexWrap:'wrap',gap:6 }}>
                    {job.tags.map(t => (
                      <span key={t} style={{ fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.1em',textTransform:'uppercase',padding:'4px 10px',background:`${job.color}0d`,border:`1px solid ${job.color}30`,color:`${job.color}cc` }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:4 }}>
                    {job.wins.map((w,wi) => (
                      <motion.div key={wi}
                        initial={{ opacity:0,scale:.92 }} whileInView={{ opacity:1,scale:1 }}
                        viewport={{ once:true }} transition={{ duration:.5,delay:.2+wi*.06 }}
                        style={{ padding:'14px 16px',background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.06)',borderLeft:`2px solid ${job.color}60` }}>
                        <div style={{ fontFamily:'var(--font-b)',fontWeight:500,fontSize:12,color:'var(--white)',lineHeight:1.5 }}>{w}</div>
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
