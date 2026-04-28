'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const APPRECIATIONS = [
  { text: 'Dependability, Quality Execution, and Customer Advocacy', from: 'Kensium Leadership', icon: '⭐' },
  { text: 'Recognized for successful production go-lives, AMI upgrades, and last-minute releases under tight timelines', from: 'Client Recognition', icon: '🚀' },
  { text: 'Trusted for high-pressure deployments including weekend and emergency support', from: 'Team Leads', icon: '🔥' },
  { text: 'Valued for strong collaboration with Dev, QA, and Solution Architect teams during critical deployments', from: 'Cross-Team Award', icon: '🤝' },
]

const ORBIT_WORDS = [
  'Dependable','Quality','Trusted','Collaborative','Reliable','Customer-First',
  'Responsive','Expert','Proactive','Resilient','Thorough','Dedicated',
  'Dependable','Quality','Trusted','Collaborative','Reliable','Customer-First',
  'Responsive','Expert','Proactive','Resilient','Thorough','Dedicated',
]

export default function Appreciations() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let raf = 0, t = 0
    const resize = () => {
      const parent = canvas.parentElement!
      canvas.width  = parent.offsetWidth
      canvas.height = parent.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const W = canvas.width, H = canvas.height
      const cx = W / 2, cy = H / 2
      ctx.clearRect(0, 0, W, H)

      // Planet body gradient
      const grd = ctx.createRadialGradient(cx - 40, cy - 40, 20, cx, cy, 160)
      grd.addColorStop(0, '#6a4fff')
      grd.addColorStop(0.5, '#2a0a7a')
      grd.addColorStop(1, '#0a0320')
      ctx.beginPath()
      ctx.arc(cx, cy, 150, 0, Math.PI * 2)
      ctx.fillStyle = grd
      ctx.fill()

      // Planet glow
      const glow = ctx.createRadialGradient(cx, cy, 130, cx, cy, 220)
      glow.addColorStop(0, 'rgba(155,109,255,0.2)')
      glow.addColorStop(1, 'rgba(155,109,255,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, 220, 0, Math.PI * 2)
      ctx.fillStyle = glow
      ctx.fill()

      // Planet surface lines
      ctx.save()
      ctx.clip()
      for (let i = 0; i < 5; i++) {
        const y = cy - 80 + i * 40
        ctx.beginPath()
        ctx.ellipse(cx, y, 120 - i * 10, 8, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(155,109,255,${0.08 + i * 0.02})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
      ctx.restore()

      // Ring 1 — tilted ellipse
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(Math.PI * 0.1)
      ctx.beginPath()
      ctx.ellipse(0, 0, 220, 44, 0, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(155,109,255,0.35)'
      ctx.lineWidth = 6
      ctx.stroke()
      ctx.restore()

      // Ring 2 — outer glow ring
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(Math.PI * 0.12)
      ctx.beginPath()
      ctx.ellipse(0, 0, 240, 48, 0, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0,245,255,0.12)'
      ctx.lineWidth = 2
      ctx.stroke()
      ctx.restore()

      // Orbiting text words — ring orbit
      const orbitR = 300
      const wordCount = 12
      ctx.font = '10px Fragment Mono, monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      for (let i = 0; i < wordCount; i++) {
        const angle = (i / wordCount) * Math.PI * 2 + t * 0.008
        const ox = cx + Math.cos(angle) * orbitR
        const oy = cy + Math.sin(angle) * orbitR * 0.4
        const word = ORBIT_WORDS[i]
        const alpha = 0.3 + 0.5 * Math.abs(Math.sin(t * 0.01 + i))
        ctx.fillStyle = `rgba(155,109,255,${alpha})`
        ctx.fillText(word, ox, oy)
      }

      t++
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section className="section" style={{ paddingTop:120, paddingBottom:120, borderTop:'1px solid var(--border)', overflow:'hidden' }}>
      <div className="wrap">
        <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.7 }} style={{ marginBottom:72, textAlign:'center' }}>
          <div className="s-tag" style={{ justifyContent:'center' }}>04 / Recognition</div>
          <h2 style={{ fontFamily:'var(--font-d)', fontSize:'clamp(48px,7vw,96px)', lineHeight:.9, letterSpacing:'.02em' }}>
            TEAM<br/><span className="gradient-text">APPRECIATIONS</span>
          </h2>
        </motion.div>

        {/* Planet canvas */}
        <div style={{ position:'relative', height:680, marginBottom:80 }}>
          <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} />

          {/* Floating award cards pinned around planet */}
          {APPRECIATIONS.map((a, i) => {
            const positions = [
              { top:'8%',  left:'0%',   textAlign:'right' as const },
              { top:'8%',  right:'0%',  textAlign:'left' as const },
              { bottom:'8%', left:'0%', textAlign:'right' as const },
              { bottom:'8%', right:'0%',textAlign:'left' as const },
            ]
            const p = positions[i]
            return (
              <motion.div key={i}
                initial={{ opacity:0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }}
                transition={{ duration:.7, delay:i*.15 }}
                style={{
                  position:'absolute', ...p,
                  maxWidth:260,
                  padding:'20px 22px',
                  background:'rgba(6,4,20,0.88)',
                  border:'1px solid rgba(155,109,255,0.25)',
                  backdropFilter:'blur(16px)',
                }}
              >
                <div style={{ fontSize:20, marginBottom:10 }}>{a.icon}</div>
                <p style={{ fontFamily:'var(--font-b)', fontWeight:400, fontSize:12, lineHeight:1.7, color:'rgba(240,236,255,0.75)', marginBottom:10 }}>
                  "{a.text}"
                </p>
                <div style={{ fontFamily:'var(--font-m)', fontSize:8, letterSpacing:'.25em', textTransform:'uppercase', color:'rgba(155,109,255,0.7)' }}>
                  — {a.from}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
