'use client'
import { motion } from 'framer-motion'

const CATEGORIES = [
  { label: 'CI/CD',          color: '#9b6dff', icon: '⟳', skills: ['Jenkins','GitHub Actions','Bitbucket Pipelines','AWS CodeBuild','GitLab CI','SonarQube'] },
  { label: 'Cloud / AWS',    color: '#00f5ff', icon: '☁',  skills: ['EC2','VPC','IAM','RDS','S3','ECR','CloudWatch','Route53','Secret Manager','AWS CLI'] },
  { label: 'Infrastructure', color: '#00ff9d', icon: '⬡',  skills: ['Linux Admin','Nginx','Docker','Ansible','WAF','CDN','DNS','Reverse Proxy','Microservices'] },
  { label: 'Monitoring',     color: '#e8b84b', icon: '◈',  skills: ['New Relic','CloudWatch','K6 Load Testing','Incident Mgmt','Log Management','SRE'] },
  { label: 'Scripting',      color: '#ff4fa3', icon: '$>',  skills: ['Bash','Python','Shell','PowerShell','YAML','Power Automate','Cron','Node.js'] },
  { label: 'Platforms',      color: '#4fa3e0', icon: '▣',  skills: ['Magento Cloud','MySQL','Redis','RabbitMQ','Elasticsearch','PHP-FPM','Fastly VCL','Cloudflare'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ paddingTop: 120, paddingBottom: 120, borderTop: '1px solid var(--border)' }}>
      <div className="wrap">
        <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.7,ease:[.16,1,.3,1] }} style={{ marginBottom:72 }}>
          <div className="s-tag">02 / Stack</div>
          <h2 style={{ fontFamily:'var(--font-d)', fontSize:'clamp(48px,7vw,96px)', lineHeight:.9, letterSpacing:'.02em' }}>
            TECHNICAL<br/><span className="gradient-text">ARSENAL</span>
          </h2>
        </motion.div>

        <div style={{ display:'flex', flexDirection:'column', gap:36 }}>
          {CATEGORIES.map((cat, ci) => (
            <motion.div key={cat.label}
              initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }}
              viewport={{ once:true }} transition={{ duration:.6,delay:ci*.07,ease:[.16,1,.3,1] }}
              style={{ display:'flex', gap:24, alignItems:'flex-start' }}
            >
              <div style={{ width:110, flexShrink:0, paddingTop:6 }}>
                <div style={{ fontFamily:'var(--font-m)', fontSize:22, color:cat.color, filter:`drop-shadow(0 0 8px ${cat.color}80)`, marginBottom:6 }}>{cat.icon}</div>
                <div style={{ fontFamily:'var(--font-m)', fontSize:8, letterSpacing:'.25em', textTransform:'uppercase', color:'var(--muted)' }}>{cat.label}</div>
              </div>
              <div style={{ flex:1, display:'flex', flexWrap:'wrap', gap:8 }}>
                {cat.skills.map((sk, si) => (
                  <motion.span key={sk} className="skill-chip"
                    initial={{ opacity:0,scale:.85 }} whileInView={{ opacity:1,scale:1 }}
                    viewport={{ once:true }} transition={{ duration:.4,delay:ci*.05+si*.035 }}
                    onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.background=`${cat.color}18`; el.style.borderColor=`${cat.color}55`; el.style.color=cat.color }}
                    onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.background=''; el.style.borderColor=''; el.style.color='' }}
                  >
                    <span className="dot" style={{ background:cat.color, boxShadow:`0 0 6px ${cat.color}` }} />
                    {sk}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
