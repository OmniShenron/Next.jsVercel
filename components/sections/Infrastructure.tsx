'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { INFRA_NODES, INFRA_EDGES } from '@/lib/data'

const COLOR: Record<string, string> = {
  gold:  '#c8a94a',
  cyan:  '#00d4ff',
  green: '#00ff88',
}

const NODE_DETAILS: Record<string, string> = {
  client:  'End-user traffic — browsers, mobile, bots',
  cf:      'Cloudflare WAF · IP/ASN filtering · DDoS mitigation · TLS termination',
  fastly:  'Fastly CDN · VCL rules · cache optimization · edge delivery',
  lb:      'Load Balancer · health checks · round-robin / sticky sessions',
  nginx:   'Nginx reverse proxy · gzip · rate limiting · upstream routing',
  app:     'PHP-FPM · Magento · app workers · cron jobs · RabbitMQ consumers',
  redis:   'Redis cache · session store · Magento FPC · TTL management',
  mq:      'RabbitMQ · async message queues · order processing · email queues',
  rds:     'Amazon RDS MySQL · multi-AZ · automated snapshots · read replicas',
}

export default function Infrastructure() {
  const [active, setActive] = useState<string | null>(null)

  // Build position map
  const pos: Record<string, { x: number; y: number }> = {}
  INFRA_NODES.forEach(n => { pos[n.id] = { x: n.x, y: n.y } })

  return (
    <section id="infra" className="py-24 px-6 border-t border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-green mb-3">
              /infra/architecture
            </div>
            <h2 className="font-display text-[clamp(32px,5vw,60px)] text-white tracking-wide">
              INFRA DIAGRAM
            </h2>
          </div>
          <div className="font-mono text-[10px] tracking-widest text-muted uppercase">
            Click a node to inspect
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* SVG Diagram */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-surface border border-subtle p-4 relative overflow-hidden"
          >
            {/* Grid dots background */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(200,169,74,0.3) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <svg
              viewBox="0 0 100 95"
              className="w-full"
              style={{ maxHeight: '520px' }}
            >
              {/* Edges */}
              {INFRA_EDGES.map(([a, b], i) => (
                <line
                  key={i}
                  x1={pos[a].x} y1={pos[a].y}
                  x2={pos[b].x} y2={pos[b].y}
                  className="infra-line"
                  strokeWidth="0.3"
                />
              ))}

              {/* Nodes */}
              {INFRA_NODES.map(node => {
                const isActive = active === node.id
                const c = COLOR[node.color]
                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    onClick={() => setActive(active === node.id ? null : node.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Glow ring when active */}
                    {isActive && (
                      <circle r="7" fill="none" stroke={c} strokeWidth="0.4" opacity="0.4">
                        <animate attributeName="r" values="7;10;7" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                    )}
                    {/* Node box */}
                    <rect
                      x="-10" y="-4.5"
                      width="20" height="9"
                      fill={isActive ? c + '20' : '#0a0a0a'}
                      stroke={isActive ? c : 'rgba(200,169,74,0.2)'}
                      strokeWidth="0.4"
                      rx="0.5"
                    />
                    {/* Icon */}
                    <text
                      textAnchor="middle"
                      dominantBaseline="middle"
                      y="-0.5"
                      fontSize="3.5"
                      fill={c}
                    >
                      {node.icon}
                    </text>
                    {/* Label */}
                    <text
                      textAnchor="middle"
                      y="8.5"
                      fontSize="2.2"
                      fill="rgba(240,236,228,0.5)"
                      fontFamily="monospace"
                    >
                      {node.label}
                    </text>
                  </g>
                )
              })}
            </svg>
          </motion.div>

          {/* Detail panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface border border-subtle p-6 min-h-[200px]"
          >
            {active ? (
              <div>
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted mb-2">
                  Node Inspector
                </div>
                <div className="font-display text-2xl text-white tracking-wide mb-3">
                  {INFRA_NODES.find(n => n.id === active)?.label}
                </div>
                <div className="h-px bg-subtle mb-4" />
                <p className="font-mono text-[12px] text-cyan/70 leading-relaxed tracking-wide">
                  {NODE_DETAILS[active]}
                </p>
                <div className="mt-6 flex gap-2 items-center">
                  <div className={`w-1.5 h-1.5 rounded-full bg-green animate-pulse`} />
                  <span className="font-mono text-[9px] tracking-widest text-muted uppercase">
                    Layer active
                  </span>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-center items-center text-center gap-3 opacity-40">
                <div className="font-mono text-3xl text-muted">⬡</div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">
                  Select a node
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-6">
          {(['gold', 'cyan', 'green'] as const).map(c => (
            <div key={c} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: COLOR[c] }} />
              <span className="font-mono text-[9px] tracking-widest text-muted uppercase">
                {c === 'gold' ? 'Security/Cache' : c === 'cyan' ? 'Routing/Proxy' : 'Compute/Storage'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
