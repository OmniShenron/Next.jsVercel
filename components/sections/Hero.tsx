'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const f = (d: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: 2.4 + d, ease: [0.16, 1, 0.3, 1] as any },
})

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="section" style={{ minHeight: '100vh', paddingTop: 72, position: 'relative' }}>
      <div style={{ position:'absolute',inset:0,zIndex:0,pointerEvents:'none', background:'radial-gradient(ellipse 120% 80% at 50% 100%, transparent 30%, var(--bg) 80%)' }} />

      <div className="wrap" style={{ position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center', minHeight:'calc(100vh - 72px)' }}>

          {/* LEFT */}
          <div>
            <motion.div {...f(0)} style={{ display:'flex', alignItems:'center', gap:12, marginBottom:32 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, padding:'6px 14px', background:'rgba(0,255,157,0.08)', border:'1px solid rgba(0,255,157,0.2)' }}>
                <div style={{ width:6,height:6,borderRadius:'50%',background:'var(--green)',animation:'pulse-dot 2s infinite' }} />
                <span style={{ fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.3em',textTransform:'uppercase',color:'var(--green)' }}>Available · Hyderabad</span>
              </div>
              <span style={{ fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.25em',textTransform:'uppercase',color:'var(--muted)' }}>DevOps · SRE · 4.8 YRS</span>
            </motion.div>

            <div style={{ marginBottom:24 }}>
              <motion.span className="glitch" data-t="SHANMUKHA" {...f(0.05)}
                style={{ display:'block',fontFamily:'var(--font-d)',fontSize:'clamp(56px,10vw,140px)',lineHeight:0.9,letterSpacing:'0.02em',color:'var(--white)' }}>
                SHANMUKHA
              </motion.span>
              <motion.span {...f(0.1)} style={{
                display:'block',fontFamily:'var(--font-d)',fontSize:'clamp(56px,10vw,140px)',lineHeight:0.9,letterSpacing:'0.02em',
                background:'linear-gradient(90deg, var(--purple), var(--cyan) 50%, var(--gold))',backgroundSize:'200%',
                WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',animation:'shimmer 4s linear infinite',
              }}>SAI PRANEETH</motion.span>
            </div>

            <motion.div {...f(0.2)} style={{ display:'flex',gap:2,marginBottom:40 }}>
              {[
                { v:'70%',  l:'Uptime',  c:'var(--green)' },
                { v:'30%',  l:'Faster',  c:'var(--cyan)' },
                { v:'60+',  l:'Scripts', c:'var(--purple)' },
                { v:'4.8Y', l:'Exp',     c:'var(--gold)' },
              ].map(s => (
                <div key={s.l} style={{ flex:1,padding:'16px 12px',textAlign:'center',background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontFamily:'var(--font-d)',fontSize:'clamp(18px,2.5vw,30px)',color:s.c,letterSpacing:'.04em',lineHeight:1 }}>{s.v}</div>
                  <div style={{ fontFamily:'var(--font-m)',fontSize:8,color:'var(--muted)',letterSpacing:'.25em',textTransform:'uppercase',marginTop:4 }}>{s.l}</div>
                </div>
              ))}
            </motion.div>

            <motion.div {...f(0.25)} style={{ display:'flex',gap:12,flexWrap:'wrap' }}>
              <a href="#contact" style={{ fontFamily:'var(--font-d)',fontSize:18,letterSpacing:'.1em',padding:'14px 36px',background:'linear-gradient(135deg, var(--purple), var(--cyan))',color:'#fff',textDecoration:'none',cursor:'none',transition:'transform .3s, box-shadow .3s' }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='translateY(-3px)';(e.currentTarget as HTMLElement).style.boxShadow='0 16px 48px rgba(155,109,255,0.4)'}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='';(e.currentTarget as HTMLElement).style.boxShadow=''}}>
                HIRE ME
              </a>
              <a href="#journey" style={{ fontFamily:'var(--font-d)',fontSize:18,letterSpacing:'.1em',padding:'13px 36px',background:'transparent',border:'1px solid rgba(255,255,255,0.15)',color:'var(--white)',textDecoration:'none',cursor:'none',transition:'border-color .3s, color .3s' }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(155,109,255,0.5)';(e.currentTarget as HTMLElement).style.color='var(--purple)'}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.15)';(e.currentTarget as HTMLElement).style.color='var(--white)'}}>
                MY JOURNEY
              </a>
            </motion.div>
          </div>

          {/* RIGHT: AVATAR — pure black bg, no polygonal artifacts */}
          <motion.div initial={{ opacity:0,scale:0.85 }} animate={{ opacity:1,scale:1 }} transition={{ duration:1.2,delay:2.6,ease:[0.16,1,0.3,1] }}
            style={{ display:'flex',justifyContent:'center',alignItems:'center',position:'relative' }}>

            {/* Orbital rings */}
            {[460,540,620].map((size,i) => (
              <div key={i} style={{
                position:'absolute',width:size,height:size,borderRadius:'50%',
                border:`1px solid rgba(${i===0?'155,109,255':i===1?'0,245,255':'232,184,75'},0.${i===0?'18':i===1?'10':'08'})`,
                animation:`spin ${20+i*10}s linear infinite${i%2?' reverse':''}`,
                top:'50%',left:'50%',marginTop:-size/2,marginLeft:-size/2,
              }}>
                <div style={{ position:'absolute',top:-4,left:'50%',marginLeft:-4,width:8,height:8,borderRadius:'50%',background:i===0?'var(--purple)':i===1?'var(--cyan)':'var(--gold)',boxShadow:`0 0 12px ${i===0?'var(--purple)':i===1?'var(--cyan)':'var(--gold)'}` }} />
              </div>
            ))}

            {/* Glow behind video */}
            <div style={{ position:'absolute',width:380,height:380,borderRadius:'50%',background:'radial-gradient(circle, rgba(155,109,255,0.18) 0%, rgba(0,245,255,0.08) 50%, transparent 70%)',filter:'blur(40px)',animation:'glow-pulse 4s ease-in-out infinite' }} />

            {/* Video: circular mask on pure #000 base — no grey edges */}
            <div style={{
              position:'relative',
              width:'clamp(260px,28vw,360px)',
              height:'clamp(260px,28vw,360px)',
              borderRadius:'50%',
              overflow:'hidden',
              background:'#000',
              isolation:'isolate',
            }}>
              <video ref={videoRef} src="/avatar.mp4" autoPlay loop muted playsInline
                style={{ width:'100%',height:'100%',objectFit:'cover',display:'block',filter:'saturate(1.2) brightness(0.95)' }} />
              {/* Subtle inner rim */}
              <div style={{ position:'absolute',inset:0,borderRadius:'50%',boxShadow:'inset 0 0 32px rgba(0,0,0,0.6)',pointerEvents:'none' }} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="scroll-hint">Scroll</div>
    </section>
  )
}
