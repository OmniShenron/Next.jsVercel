'use client'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ paddingTop:120,paddingBottom:120,borderTop:'1px solid var(--border)',position:'relative',overflow:'hidden' }}>
      <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:800,height:800,borderRadius:'50%',background:'radial-gradient(circle, rgba(155,109,255,0.06) 0%, transparent 70%)',pointerEvents:'none',filter:'blur(60px)' }} />

      <div className="wrap" style={{ position:'relative',zIndex:1 }}>
        <motion.div initial={{ opacity:0,y:40 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.9,ease:[.16,1,.3,1] }} style={{ marginBottom:80 }}>
          <div className="s-tag">07 / Contact</div>
          <h2 style={{ fontFamily:'var(--font-d)',fontSize:'clamp(56px,10vw,160px)',lineHeight:.85,letterSpacing:'.01em',marginBottom:32 }}>
            LET'S<br/>
            <span style={{ background:'linear-gradient(90deg, var(--purple), var(--cyan) 40%, var(--gold))',backgroundSize:'200%',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',animation:'shimmer 4s linear infinite' }}>BUILD</span><br/>
            TOGETHER
          </h2>
          <div style={{ display:'flex',alignItems:'center',gap:12 }}>
            <div style={{ width:6,height:6,borderRadius:'50%',background:'var(--green)',animation:'pulse-dot 2s infinite' }} />
            <span style={{ fontFamily:'var(--font-m)',fontSize:10,letterSpacing:'.3em',textTransform:'uppercase',color:'var(--green)' }}>Open to DevOps · SRE · Infrastructure Roles</span>
          </div>
        </motion.div>

        <div style={{ display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:4,marginBottom:40 }}>
          {[
            { icon:'✉', label:'Email',    val:'saipraneeth3722@gmail.com', href:'mailto:saipraneeth3722@gmail.com', c:'#9b6dff' },
            { icon:'📞', label:'Phone',   val:'+91-9100066989',             href:'tel:+919100066989',              c:'#00f5ff' },
            { icon:'📍', label:'Location',val:'Hyderabad, India · GMT+5:30',href:null,                             c:'#e8b84b' },
            { icon:'💼', label:'LinkedIn',val:'shanmukha-sai-praneeth',     href:'https://www.linkedin.com/in/shanmukha-sai-p-a14047136', c:'#00ff9d' },
          ].map((l,i) => {
            const El: any = l.href ? 'a' : 'div'
            return (
              <motion.div key={i} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.6,delay:i*.08 }}>
                <El href={l.href||undefined} target={l.href?.startsWith('http')?'_blank':undefined}
                  className="contact-link" style={{ textDecoration:'none',cursor:l.href?'none':'default' }}
                  onMouseEnter={(e: React.MouseEvent)=>{const el=e.currentTarget as HTMLElement;el.style.background=`${l.c}0a`;el.style.borderColor=`${l.c}40`;el.style.transform='translateX(8px)'}}
                  onMouseLeave={(e: React.MouseEvent)=>{const el=e.currentTarget as HTMLElement;el.style.background='rgba(255,255,255,0.02)';el.style.borderColor='var(--border)';el.style.transform=''}}
                >
                  <div className="contact-icon" style={{ background:`${l.c}14`,border:`1px solid ${l.c}30`,fontSize:20 }}>{l.icon}</div>
                  <div>
                    <div style={{ fontFamily:'var(--font-m)',fontSize:8,letterSpacing:'.3em',textTransform:'uppercase',color:'var(--muted)',marginBottom:4 }}>{l.label}</div>
                    <div style={{ fontFamily:'var(--font-b)',fontWeight:400,fontSize:13,color:'rgba(240,236,255,0.75)' }}>{l.val}</div>
                  </div>
                  {l.href && <div style={{ marginLeft:'auto',fontFamily:'var(--font-m)',fontSize:16,color:l.c,opacity:.5 }}>→</div>}
                </El>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.6,delay:.3 }} style={{ display:'flex',gap:12,flexWrap:'wrap' }}>
          <a href="mailto:saipraneeth3722@gmail.com" style={{ fontFamily:'var(--font-d)',fontSize:20,letterSpacing:'.08em',padding:'16px 40px',background:'linear-gradient(135deg, var(--purple), var(--cyan))',color:'#fff',textDecoration:'none',cursor:'none',transition:'transform .3s, box-shadow .3s' }}
            onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform='translateY(-3px)';el.style.boxShadow='0 16px 48px rgba(155,109,255,0.4)'}}
            onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform='';el.style.boxShadow=''}}>
            SEND EMAIL →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
