'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Universe() {
  return (
    <section id="universe" className="section" style={{ paddingTop:120,paddingBottom:120 }}>
      <div className="wrap">
        <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.7 }} style={{ marginBottom:60 }}>
          <div className="s-tag">UNIVERSE</div>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(12,1fr)', gridTemplateRows:'auto', gap:8 }}>

          {/* Gandalf achievement — col 1-5 */}
          <motion.div className="rv" style={{ gridColumn:'1 / 6', position:'relative', overflow:'hidden', minHeight:420, cursor:'none' }}>
            <Image src="/gandalf.png" alt="Passed Gandalf — Lakera AI" fill style={{ objectFit:'cover',filter:'saturate(1.3) brightness(0.85)' }} />
            <div style={{ position:'absolute',inset:0,background:'linear-gradient(135deg, rgba(3,1,10,0.6) 0%, transparent 50%, rgba(3,1,10,0.7) 100%)' }} />
            <div style={{ position:'absolute',bottom:24,left:24,right:24 }}>
              <div style={{ fontFamily:'var(--font-m)',fontSize:8,color:'rgba(0,245,255,0.8)',letterSpacing:'.35em',textTransform:'uppercase',marginBottom:6 }}>Achievement Unlocked</div>
              <div style={{ fontFamily:'var(--font-d)',fontSize:32,color:'var(--white)',letterSpacing:'.06em',lineHeight:1,marginBottom:4 }}>PASSED GANDALF</div>
              <div style={{ fontFamily:'var(--font-m)',fontSize:10,color:'var(--muted)' }}>Lakera · Tongue Tied Adventure · AI Prompt Engineering</div>
            </div>
          </motion.div>

          {/* GenAI cert — col 6-9, row 1 */}
          <motion.div className="rv" style={{ gridColumn:'6 / 10', position:'relative', overflow:'hidden', minHeight:200, cursor:'none' }}>
            <Image src="/cert-genai.jpg" alt="GenAI + RAG Certificate" fill style={{ objectFit:'cover',filter:'brightness(0.75) saturate(0.6)' }} />
            <div style={{ position:'absolute',inset:0,background:'linear-gradient(to top, rgba(3,1,10,0.95) 0%, rgba(3,1,10,0.2) 100%)' }} />
            <div style={{ position:'absolute',bottom:16,left:16,right:16 }}>
              <div style={{ fontFamily:'var(--font-m)',fontSize:8,color:'rgba(232,184,75,0.8)',letterSpacing:'.3em',textTransform:'uppercase',marginBottom:4 }}>Certificate</div>
              <div style={{ fontFamily:'var(--font-d)',fontSize:22,color:'var(--white)',letterSpacing:'.06em',lineHeight:1.1 }}>GENAI + RAG</div>
              <div style={{ fontFamily:'var(--font-m)',fontSize:9,color:'var(--muted)' }}>Coding Ninjas · #495183</div>
            </div>
          </motion.div>

          {/* Bio card — col 10-13, row 1 */}
          <motion.div className="rv glass" style={{ gridColumn:'10 / 13', padding:'28px 24px', display:'flex', flexDirection:'column', justifyContent:'space-between', gap:20, minHeight:200 }}>
            <div>
              <div style={{ fontFamily:'var(--font-d)',fontSize:28,letterSpacing:'.06em',lineHeight:1,marginBottom:10 }}>DEVOPS <span className="gradient-text">ENGINEER</span></div>
              <div style={{ fontFamily:'var(--font-b)',fontWeight:300,fontSize:12,lineHeight:1.8,color:'var(--muted)' }}>5 years at 99.9% uptime. Linux · AWS · CI/CD · Magento · Docker · Ansible.</div>
            </div>
            <div style={{ display:'flex',gap:6,flexWrap:'wrap' }}>
              {['Hyderabad, IN','saipraneeth3722@gmail.com'].map(t => (
                <span key={t} style={{ fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.1em',color:'var(--muted)',padding:'4px 10px',background:'rgba(255,255,255,0.04)',border:'1px solid var(--border)' }}>{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Education — col 6-13, row 2 */}
          <motion.div className="rv glass" style={{ gridColumn:'6 / 13', padding:'28px 28px', display:'flex', gap:40, flexWrap:'wrap' }}>
            <div style={{ fontFamily:'var(--font-m)',fontSize:8,letterSpacing:'.35em',textTransform:'uppercase',color:'var(--purple)',width:'100%' }}>Education</div>
            {[
              { deg:'B.Tech Computer Science', inst:'Vignan Institute of Technology & Science', icon:'🎓' },
              { deg:'School',                  inst:'Keshava Reddy Residential School',         icon:'🏫' },
            ].map(e => (
              <div key={e.deg} style={{ display:'flex',gap:14,alignItems:'flex-start',flex:1,minWidth:200 }}>
                <div style={{ fontSize:28,flexShrink:0 }}>{e.icon}</div>
                <div>
                  <div style={{ fontFamily:'var(--font-d)',fontSize:18,letterSpacing:'.04em',color:'var(--white)',lineHeight:1.1 }}>{e.deg}</div>
                  <div style={{ fontFamily:'var(--font-b)',fontWeight:300,fontSize:11,color:'var(--muted)',marginTop:4,lineHeight:1.5 }}>{e.inst}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
