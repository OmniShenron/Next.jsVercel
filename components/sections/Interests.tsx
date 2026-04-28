'use client'
import { motion } from 'framer-motion'

const INTERESTS = [
  {
    emoji: '🎮',
    title: 'GAMING',
    sub: 'Open World · Strategy · FPS',
    color: '#9b6dff',
    bg: 'radial-gradient(circle at 40% 40%, rgba(155,109,255,0.3), rgba(155,109,255,0.05) 70%)',
    delay: 0,
    duration: 5,
  },
  {
    emoji: '🔭',
    title: 'ASTRONOMY',
    sub: 'Deep Space · Cosmology · Stargazing',
    color: '#00f5ff',
    bg: 'radial-gradient(circle at 60% 30%, rgba(0,245,255,0.3), rgba(0,245,255,0.05) 70%)',
    delay: 0.8,
    duration: 6.5,
  },
  {
    emoji: '🎵',
    title: 'MUSIC',
    sub: 'Electronic · Ambient · Lo-Fi',
    color: '#e8b84b',
    bg: 'radial-gradient(circle at 50% 60%, rgba(232,184,75,0.3), rgba(232,184,75,0.05) 70%)',
    delay: 1.6,
    duration: 4.5,
  },
]

export default function Interests() {
  return (
    <section id="vibes" className="section" style={{ paddingTop:120, paddingBottom:120, borderTop:'1px solid var(--border)' }}>
      <div className="wrap">
        <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.7 }} style={{ marginBottom:80, textAlign:'center' }}>
          <div className="s-tag" style={{ justifyContent:'center' }}>06 / Outside the Terminal</div>
          <h2 style={{ fontFamily:'var(--font-d)', fontSize:'clamp(48px,7vw,96px)', lineHeight:.9, letterSpacing:'.02em' }}>
            VIBES &amp;<br/><span className="gradient-text">INTERESTS</span>
          </h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:4 }} className="max-md:grid-cols-1">
          {INTERESTS.map((orb, i) => (
            <motion.div key={i}
              initial={{ opacity:0,y:40,scale:.92 }}
              whileInView={{ opacity:1,y:0,scale:1 }}
              viewport={{ once:true }}
              transition={{ duration:.8, delay:i*.15, ease:[.16,1,.3,1] }}
              className="orb"
              style={{
                padding:'60px 40px',
                background:'rgba(255,255,255,0.02)',
                border:'1px solid rgba(255,255,255,0.07)',
                textAlign:'center',
                position:'relative',
                overflow:'hidden',
                cursor:'none',
                transition:'transform .4s var(--ease), border-color .3s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = `${orb.color}40`
                el.style.transform = 'translateY(-8px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.07)'
                el.style.transform = ''
              }}
            >
              {/* Background glow */}
              <div style={{
                position:'absolute', inset:0,
                background: orb.bg,
                opacity: 0.6,
                pointerEvents:'none',
              }} />

              {/* Floating emoji orb */}
              <motion.div
                animate={{ y:[0,-16,0] }}
                transition={{ duration:orb.duration, repeat:Infinity, ease:'easeInOut', delay:orb.delay }}
                style={{
                  width:120, height:120,
                  borderRadius:'50%',
                  background: orb.bg,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:52,
                  margin:'0 auto 28px',
                  boxShadow:`0 0 40px ${orb.color}30, 0 0 80px ${orb.color}15`,
                  position:'relative', zIndex:1,
                }}
              >
                {orb.emoji}
              </motion.div>

              {/* Concentric ring decoration */}
              {[140, 180, 220].map((s, ri) => (
                <div key={ri} style={{
                  position:'absolute',
                  width:s, height:s,
                  borderRadius:'50%',
                  border:`1px solid ${orb.color}${ri === 0 ? '20' : ri === 1 ? '12' : '07'}`,
                  top:'50%', left:'50%',
                  marginTop: -s/2 - 20, marginLeft: -s/2,
                  pointerEvents:'none',
                  animation:`spin ${30 + ri*15}s linear infinite${ri%2?' reverse':''}`,
                }} />
              ))}

              <div style={{ position:'relative', zIndex:1 }}>
                <div style={{
                  fontFamily:'var(--font-d)', fontSize:36, letterSpacing:'.08em',
                  color:orb.color, marginBottom:8,
                  textShadow:`0 0 20px ${orb.color}80`,
                }}>
                  {orb.title}
                </div>
                <div style={{ fontFamily:'var(--font-m)', fontSize:10, letterSpacing:'.2em', color:'var(--muted)', textTransform:'uppercase' }}>
                  {orb.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
