'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─────────────────────────────────────────────────────────────
   IMMERSIVE UNIVERSE — Canvas-powered 3D scroll experience
   • Star warp (wormhole) that accelerates on scroll
   • Nebula clouds that morph and drift
   • Section panels emerge from the void as you fly through
   • Orbital planet for appreciations
   • Section text bursts in from space
───────────────────────────────────────────────────────────── */

const SECTIONS = [
  { id: 'warp',         label: null },
  { id: 'skills',       label: 'TECHNICAL ARSENAL' },
  { id: 'timeline',     label: 'CAREER TIMELINE' },
  { id: 'appreciations',label: 'TEAM APPRECIATIONS' },
  { id: 'achievements', label: 'BY THE NUMBERS' },
  { id: 'vibes',        label: 'VIBES & INTERESTS' },
]

const SKILLS_DATA = [
  { cat:'CI/CD',       color:'#9b6dff', items:['Jenkins','GitHub Actions','Bitbucket','AWS CodeBuild','GitLab CI'] },
  { cat:'Cloud / AWS', color:'#00f5ff', items:['EC2','VPC','IAM','RDS','S3','ECR','CloudWatch','Route53'] },
  { cat:'Infra',       color:'#00ff9d', items:['Linux Admin','Nginx','Docker','Ansible','WAF','CDN','DNS'] },
  { cat:'Monitor',     color:'#e8b84b', items:['New Relic','CloudWatch','K6','Incident Mgmt','Log Mgmt'] },
  { cat:'Scripting',   color:'#ff4fa3', items:['Bash','Python','Shell','PowerShell','YAML','Power Automate'] },
  { cat:'Platforms',   color:'#4fa3e0', items:['Magento','MySQL','Redis','RabbitMQ','Elasticsearch','Fastly'] },
]

const APPRECIATIONS = [
  { text:'Dependability, Quality Execution, and Customer Advocacy', from:'Kensium Leadership', icon:'⭐' },
  { text:'Recognized for successful production go-lives, AMI upgrades, and last-minute releases under tight timelines', from:'Client Recognition', icon:'🚀' },
  { text:'Trusted for high-pressure deployments including weekend and emergency support', from:'Team Leads', icon:'🔥' },
  { text:'Valued for strong collaboration with Dev, QA, and Solution Architect teams during critical deployments', from:'Cross-Team Award', icon:'🤝' },
]

const METRICS = [
  { v:'70%',  l:'Uptime SLA',          c:'#00ff9d' },
  { v:'100%', l:'On-Time Deliveries',   c:'#9b6dff' },
  { v:'30%',  l:'Release Acceleration', c:'#00f5ff' },
  { v:'60+',  l:'Automations Built',    c:'#e8b84b' },
  { v:'25%',  l:'Cost Reduction',       c:'#ff4fa3' },
  { v:'10+',  l:'Client Awards',        c:'#4fa3e0' },
]

const INTERESTS = [
  { emoji:'🎮', title:'GAMING',     sub:'Open World · Strategy · FPS',       color:'#9b6dff', dur:5   },
  { emoji:'🔭', title:'ASTRONOMY',  sub:'Deep Space · Cosmology · Stargazing',color:'#00f5ff', dur:6.5 },
  { emoji:'🎵', title:'MUSIC',      sub:'Electronic · Ambient · Lo-Fi',       color:'#e8b84b', dur:4.5 },
]

export default function ImmersiveUniverse() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const scrollRef  = useRef(0)
  const targetRef  = useRef(0)
  const [section, setSection] = useState(0)

  /* ── WARP CANVAS ── */
  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx    = canvas.getContext('2d')!
    let W = 0, H = 0, raf = 0

    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    // Stars for warp
    interface Star { x:number;y:number;z:number;pz:number;color:string }
    const COLORS = ['#ffffff','#c8c8ff','#9b6dff','#00f5ff','#e8b84b']
    const N = 500
    const stars: Star[] = Array.from({length:N}, () => ({
      x:(Math.random()-0.5)*2000, y:(Math.random()-0.5)*2000,
      z:Math.random()*1000, pz:0,
      color: COLORS[Math.floor(Math.random()*COLORS.length)],
    }))

    // Nebula blobs
    interface Blob { x:number;y:number;r:number;color:string;a:number;dx:number;dy:number }
    const blobs: Blob[] = [
      {x:.25,y:.35,r:.3, color:'rgba(155,109,255,',a:.07,dx:.0002,dy:.0001},
      {x:.72,y:.55,r:.25,color:'rgba(0,245,255,',   a:.05,dx:-.0001,dy:.0002},
      {x:.5, y:.8, r:.2, color:'rgba(232,184,75,',  a:.04,dx:.0001,dy:-.0001},
      {x:.15,y:.7, r:.18,color:'rgba(0,255,157,',   a:.04,dx:.0002,dy:.0001},
    ]

    let speed = 1
    let t = 0

    const draw = () => {
      // Smooth scroll
      scrollRef.current += (targetRef.current - scrollRef.current) * 0.06
      const scroll = scrollRef.current

      // Speed ramps with scroll section
      const sectionIdx = Math.floor(scroll)
      speed = 1 + scroll * 0.8

      ctx.fillStyle = 'rgba(3,1,10,0.22)'
      ctx.fillRect(0,0,W,H)

      // Nebula
      for (const b of blobs) {
        b.x += b.dx; b.y += b.dy
        if (b.x < 0 || b.x > 1) b.dx *= -1
        if (b.y < 0 || b.y > 1) b.dy *= -1
        const grd = ctx.createRadialGradient(b.x*W,b.y*H,0,b.x*W,b.y*H,b.r*W)
        const pulse = b.a * (0.6 + 0.4*Math.sin(t*.008))
        grd.addColorStop(0, b.color+pulse+')')
        grd.addColorStop(1, b.color+'0)')
        ctx.fillStyle = grd
        ctx.beginPath(); ctx.ellipse(b.x*W,b.y*H,b.r*W,b.r*H*0.6,0,0,Math.PI*2); ctx.fill()
      }

      // Warp stars
      const cx = W/2, cy = H/2
      for (const s of stars) {
        s.pz = s.z
        s.z -= speed * (4 + scroll * 1.2)
        if (s.z <= 0) { s.z = 1000; s.x = (Math.random()-.5)*2000; s.y = (Math.random()-.5)*2000; s.pz = s.z }

        const sx  = (s.x / s.z)  * W/2 + cx
        const sy  = (s.y / s.z)  * H/2 + cy
        const px  = (s.x / s.pz) * W/2 + cx
        const py  = (s.y / s.pz) * H/2 + cy
        const sz  = Math.min(3.5, (1000-s.z)/220 * (1 + scroll*.3))
        const alpha = Math.min(1, (1000-s.z)/400)

        ctx.beginPath()
        ctx.moveTo(px, py)
        ctx.lineTo(sx, sy)
        ctx.strokeStyle = s.color.replace(')',`,${alpha})`)
        ctx.lineWidth = sz
        ctx.stroke()
      }

      // Section progress indicators — tiny dots top right
      ctx.save()
      const dotY = 40, dotX = W - 40
      for (let i = 0; i < SECTIONS.length; i++) {
        const active = i === sectionIdx
        ctx.beginPath()
        ctx.arc(dotX, dotY + i*14, active?4:2, 0, Math.PI*2)
        ctx.fillStyle = active ? '#9b6dff' : 'rgba(255,255,255,0.2)'
        if (active) ctx.shadowColor = '#9b6dff', ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0
      }
      ctx.restore()

      t++
      raf = requestAnimationFrame(draw)
    }
    draw()

    // Scroll handler — map page scroll to section float
    const handleScroll = () => {
      const el = document.getElementById('universe-scroll')
      if (!el) return
      const rect = el.getBoundingClientRect()
      const totalH = el.offsetHeight - window.innerHeight
      const progress = Math.max(0, Math.min(1, -rect.top / totalH))
      targetRef.current = progress * (SECTIONS.length - 1)
      setSection(Math.min(SECTIONS.length-1, Math.floor(progress * SECTIONS.length)))
    }
    window.addEventListener('scroll', handleScroll, { passive:true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Sticky canvas layer */}
      <div id="universe-scroll" style={{ position:'relative', height:`${SECTIONS.length * 100}vh` }}>
        <div style={{ position:'sticky', top:0, height:'100vh', overflow:'hidden' }}>
          <canvas ref={canvasRef} style={{ position:'absolute',inset:0,width:'100%',height:'100%' }} />

          {/* Section content rendered over canvas */}
          <div style={{ position:'relative',zIndex:2,height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',pointerEvents:'none' }}>
            <AnimatePresence mode="wait">

              {/* ── WARP / INTRO ── */}
              {section === 0 && (
                <motion.div key="warp"
                  initial={{ opacity:0,scale:1.4 }} animate={{ opacity:1,scale:1 }} exit={{ opacity:0,scale:0.6 }}
                  transition={{ duration:.8,ease:[.16,1,.3,1] }}
                  style={{ textAlign:'center',pointerEvents:'none' }}
                >
                  <div style={{ fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.5em',textTransform:'uppercase',color:'rgba(155,109,255,0.6)',marginBottom:24 }}>
                    INITIATING WARP SEQUENCE
                  </div>
                  <div style={{ fontFamily:'var(--font-d)',fontSize:'clamp(48px,8vw,120px)',lineHeight:.88,letterSpacing:'.02em',textAlign:'center' }}>
                    <div style={{ color:'rgba(255,255,255,0.9)' }}>ENTER THE</div>
                    <div style={{ background:'linear-gradient(90deg,#9b6dff,#00f5ff,#e8b84b)',backgroundSize:'200%',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',animation:'shimmer 3s linear infinite' }}>UNIVERSE</div>
                  </div>
                  <div style={{ marginTop:40,fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.35em',textTransform:'uppercase',color:'rgba(255,255,255,0.25)' }}>
                    ↓ SCROLL TO EXPLORE
                  </div>
                </motion.div>
              )}

              {/* ── SKILLS ── */}
              {section === 1 && (
                <motion.div key="skills"
                  initial={{ opacity:0,y:60 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-60 }}
                  transition={{ duration:.7,ease:[.16,1,.3,1] }}
                  style={{ width:'100%',maxWidth:1200,padding:'0 48px',pointerEvents:'all' }}
                >
                  <div style={{ textAlign:'center',marginBottom:48 }}>
                    <div style={{ fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.4em',textTransform:'uppercase',color:'rgba(155,109,255,0.6)',marginBottom:12 }}>02 / TECHNICAL ARSENAL</div>
                    <div style={{ fontFamily:'var(--font-d)',fontSize:'clamp(40px,6vw,80px)',lineHeight:.9,letterSpacing:'.02em',background:'linear-gradient(90deg,#9b6dff,#00f5ff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
                      SKILLS
                    </div>
                  </div>
                  <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8 }}>
                    {SKILLS_DATA.map((cat,ci) => (
                      <motion.div key={cat.cat}
                        initial={{ opacity:0,y:24,scale:.95 }} animate={{ opacity:1,y:0,scale:1 }}
                        transition={{ duration:.5,delay:ci*.08 }}
                        style={{ padding:'20px 20px',background:'rgba(6,4,20,0.85)',border:`1px solid ${cat.color}25`,backdropFilter:'blur(16px)' }}
                      >
                        <div style={{ fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.25em',textTransform:'uppercase',color:cat.color,marginBottom:12 }}>{cat.cat}</div>
                        <div style={{ display:'flex',flexWrap:'wrap',gap:5 }}>
                          {cat.items.map(sk => (
                            <span key={sk} style={{ fontFamily:'var(--font-m)',fontSize:8,letterSpacing:'.08em',padding:'3px 8px',background:`${cat.color}10`,border:`1px solid ${cat.color}30`,color:`${cat.color}cc`,textTransform:'uppercase' }}>
                              {sk}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── TIMELINE ── */}
              {section === 2 && (
                <motion.div key="timeline"
                  initial={{ opacity:0,x:-80 }} animate={{ opacity:1,x:0 }} exit={{ opacity:0,x:80 }}
                  transition={{ duration:.7,ease:[.16,1,.3,1] }}
                  style={{ width:'100%',maxWidth:960,padding:'0 48px',pointerEvents:'all' }}
                >
                  <div style={{ fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.4em',textTransform:'uppercase',color:'rgba(155,109,255,0.6)',marginBottom:16 }}>03 / JOURNEY</div>
                  <div style={{ fontFamily:'var(--font-d)',fontSize:'clamp(40px,6vw,80px)',lineHeight:.9,marginBottom:48,background:'linear-gradient(90deg,#fff,#9b6dff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
                    CAREER TIMELINE
                  </div>
                  {[
                    { period:'APR 2021 — JUN 2026',dur:'4.8 YRS',role:'DEVOPS ENGINEER',co:'Kensium Solutions',color:'#9b6dff',wins:['99.9% uptime across all Prod','30% faster CI/CD','60+ automations · -25% cost','Zero missed go-lives'] },
                    { period:'JAN 2020 — JUN 2020',dur:'6 MO',role:'SYSTEM ENGINEER',co:'Maavi',color:'#00f5ff',wins:['24×7 NOC operations','15% downtime reduction'] },
                  ].map((job,i) => (
                    <motion.div key={i} initial={{ opacity:0,x:-30 }} animate={{ opacity:1,x:0 }} transition={{ duration:.5,delay:i*.15 }}
                      style={{ display:'flex',gap:24,marginBottom:32,paddingBottom:32,borderBottom:i===0?'1px solid rgba(255,255,255,0.06)':'none' }}>
                      <div style={{ flexShrink:0,paddingTop:4 }}>
                        <div style={{ width:12,height:12,borderRadius:'50%',background:job.color,boxShadow:`0 0 12px ${job.color}`,marginBottom:8 }} />
                        <div style={{ fontFamily:'var(--font-d)',fontSize:28,color:`${job.color}60`,letterSpacing:'.04em',lineHeight:1 }}>{job.dur}</div>
                      </div>
                      <div style={{ flex:1 }}>
                        <div style={{ fontFamily:'var(--font-m)',fontSize:8,letterSpacing:'.25em',textTransform:'uppercase',color:'var(--muted)',marginBottom:6 }}>{job.period}</div>
                        <div style={{ fontFamily:'var(--font-d)',fontSize:'clamp(22px,3vw,36px)',color:'var(--white)',letterSpacing:'.03em',lineHeight:1,marginBottom:4 }}>{job.role}</div>
                        <div style={{ fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.2em',textTransform:'uppercase',color:job.color,marginBottom:14 }}>{job.co}</div>
                        <div style={{ display:'flex',flexWrap:'wrap',gap:6 }}>
                          {job.wins.map(w => (
                            <span key={w} style={{ fontFamily:'var(--font-b)',fontWeight:500,fontSize:11,padding:'5px 12px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',color:'rgba(255,255,255,0.7)' }}>{w}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* ── APPRECIATIONS ── */}
              {section === 3 && (
                <motion.div key="appr"
                  initial={{ opacity:0,scale:.85 }} animate={{ opacity:1,scale:1 }} exit={{ opacity:0,scale:1.1 }}
                  transition={{ duration:.7,ease:[.16,1,.3,1] }}
                  style={{ width:'100%',maxWidth:1100,padding:'0 48px',pointerEvents:'all' }}
                >
                  <div style={{ textAlign:'center',marginBottom:40 }}>
                    <div style={{ fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.4em',textTransform:'uppercase',color:'rgba(155,109,255,0.6)',marginBottom:12 }}>04 / RECOGNITION</div>
                    <div style={{ fontFamily:'var(--font-d)',fontSize:'clamp(40px,6vw,80px)',lineHeight:.9,background:'linear-gradient(90deg,#e8b84b,#fff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
                      TEAM APPRECIATION
                    </div>
                  </div>
                  <div style={{ display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:8 }}>
                    {APPRECIATIONS.map((a,i) => (
                      <motion.div key={i} initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:.5,delay:i*.1 }}
                        style={{ padding:'24px 24px',background:'rgba(6,4,20,0.88)',border:'1px solid rgba(155,109,255,0.2)',backdropFilter:'blur(16px)' }}>
                        <div style={{ fontSize:22,marginBottom:12 }}>{a.icon}</div>
                        <p style={{ fontFamily:'var(--font-b)',fontWeight:400,fontSize:12,lineHeight:1.75,color:'rgba(240,236,255,0.75)',marginBottom:10 }}>"{a.text}"</p>
                        <div style={{ fontFamily:'var(--font-m)',fontSize:8,letterSpacing:'.25em',textTransform:'uppercase',color:'rgba(155,109,255,0.7)' }}>— {a.from}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── ACHIEVEMENTS ── */}
              {section === 4 && (
                <motion.div key="achiev"
                  initial={{ opacity:0,y:80 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-80 }}
                  transition={{ duration:.7,ease:[.16,1,.3,1] }}
                  style={{ width:'100%',maxWidth:1100,padding:'0 48px',pointerEvents:'all' }}
                >
                  <div style={{ textAlign:'center',marginBottom:48 }}>
                    <div style={{ fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.4em',textTransform:'uppercase',color:'rgba(155,109,255,0.6)',marginBottom:12 }}>05 / RESULTS</div>
                    <div style={{ fontFamily:'var(--font-d)',fontSize:'clamp(40px,6vw,80px)',lineHeight:.9,background:'linear-gradient(90deg,#00ff9d,#00f5ff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
                      BY THE NUMBERS
                    </div>
                  </div>
                  <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:4 }}>
                    {METRICS.map((m,i) => (
                      <motion.div key={i} initial={{ opacity:0,scale:.8 }} animate={{ opacity:1,scale:1 }} transition={{ duration:.5,delay:i*.08 }}
                        style={{ padding:'32px 24px',background:'rgba(6,4,20,0.85)',border:`1px solid ${m.c}20`,backdropFilter:'blur(16px)',textAlign:'center' }}>
                        <div style={{ fontFamily:'var(--font-d)',fontSize:'clamp(40px,5vw,72px)',color:m.c,lineHeight:.9,letterSpacing:'-.01em',textShadow:`0 0 30px ${m.c}60`,marginBottom:12 }}>{m.v}</div>
                        <div style={{ fontFamily:'var(--font-b)',fontWeight:500,fontSize:12,color:'rgba(255,255,255,0.7)' }}>{m.l}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── VIBES / INTERESTS ── */}
              {section === 5 && (
                <motion.div key="vibes"
                  initial={{ opacity:0,rotateY:30 }} animate={{ opacity:1,rotateY:0 }} exit={{ opacity:0,rotateY:-30 }}
                  transition={{ duration:.8,ease:[.16,1,.3,1] }}
                  style={{ width:'100%',maxWidth:1100,padding:'0 48px',pointerEvents:'all',perspective:1000 }}
                >
                  <div style={{ textAlign:'center',marginBottom:48 }}>
                    <div style={{ fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.4em',textTransform:'uppercase',color:'rgba(155,109,255,0.6)',marginBottom:12 }}>06 / OUTSIDE THE TERMINAL</div>
                    <div style={{ fontFamily:'var(--font-d)',fontSize:'clamp(40px,6vw,80px)',lineHeight:.9,background:'linear-gradient(90deg,#ff4fa3,#9b6dff,#e8b84b)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
                      VIBES & INTERESTS
                    </div>
                  </div>
                  <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8 }}>
                    {INTERESTS.map((orb,i) => (
                      <motion.div key={i}
                        initial={{ opacity:0,y:40,scale:.9 }} animate={{ opacity:1,y:0,scale:1 }}
                        transition={{ duration:.6,delay:i*.12 }}
                        style={{ padding:'40px 28px',background:'rgba(6,4,20,0.85)',border:`1px solid ${orb.color}25`,backdropFilter:'blur(16px)',textAlign:'center',position:'relative',overflow:'hidden' }}
                      >
                        <div style={{ position:'absolute',inset:0,background:`radial-gradient(circle at 50% 40%, ${orb.color}18, transparent 70%)`,pointerEvents:'none' }} />
                        <motion.div animate={{ y:[0,-12,0] }} transition={{ duration:orb.dur,repeat:Infinity,ease:'easeInOut',delay:i*.5 }}
                          style={{ fontSize:56,marginBottom:20,filter:`drop-shadow(0 0 16px ${orb.color}80)`,position:'relative',zIndex:1 }}>
                          {orb.emoji}
                        </motion.div>
                        <div style={{ fontFamily:'var(--font-d)',fontSize:32,color:orb.color,letterSpacing:'.08em',textShadow:`0 0 20px ${orb.color}60`,marginBottom:8,position:'relative',zIndex:1 }}>{orb.title}</div>
                        <div style={{ fontFamily:'var(--font-m)',fontSize:9,letterSpacing:'.2em',color:'var(--muted)',textTransform:'uppercase',position:'relative',zIndex:1 }}>{orb.sub}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Scroll progress bar */}
          <div style={{ position:'absolute',bottom:0,left:0,right:0,height:1,background:'rgba(255,255,255,0.05)' }}>
            <div style={{ height:'100%',background:'linear-gradient(90deg,#9b6dff,#00f5ff)',width:`${(section/(SECTIONS.length-1))*100}%`,transition:'width .4s',boxShadow:'0 0 8px #9b6dff' }} />
          </div>
        </div>
      </div>
    </>
  )
}
