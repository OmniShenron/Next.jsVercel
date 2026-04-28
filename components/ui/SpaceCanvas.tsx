'use client'
import { useEffect, useRef } from 'react'

export default function SpaceCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0, raf = 0

    // Particle types
    const stars: { x: number; y: number; r: number; a: number; speed: number; twinkle: number }[] = []
    const nebula: { x: number; y: number; rx: number; ry: number; color: string; a: number }[] = []
    const dust: { x: number; y: number; vx: number; vy: number; r: number; a: number; color: string }[] = []

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Init stars
    for (let i = 0; i < 280; i++) {
      stars.push({
        x: Math.random() * 2000, y: Math.random() * 2000,
        r: Math.random() * 1.4 + 0.2,
        a: Math.random(),
        speed: Math.random() * 0.003 + 0.001,
        twinkle: Math.random() * Math.PI * 2,
      })
    }

    // Nebula clouds
    const nebulaColors = [
      'rgba(155,109,255,', 'rgba(0,245,255,', 'rgba(79,163,224,', 'rgba(232,184,75,',
    ]
    for (let i = 0; i < 12; i++) {
      nebula.push({
        x: Math.random(), y: Math.random(),
        rx: Math.random() * 0.25 + 0.08,
        ry: Math.random() * 0.15 + 0.05,
        color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
        a: Math.random() * 0.04 + 0.01,
      })
    }

    // Drifting dust
    const dustColors = ['#9b6dff','#00f5ff','#e8b84b','#4fa3e0']
    for (let i = 0; i < 60; i++) {
      dust.push({
        x: Math.random() * 2000, y: Math.random() * 2000,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.06 - 0.04,
        r: Math.random() * 1.8 + 0.4,
        a: Math.random() * 0.5 + 0.1,
        color: dustColors[Math.floor(Math.random() * dustColors.length)],
      })
    }

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Nebula background blobs
      for (const n of nebula) {
        const grd = ctx.createRadialGradient(
          n.x * W, n.y * H, 0,
          n.x * W, n.y * H, n.rx * W
        )
        grd.addColorStop(0, n.color + n.a + ')')
        grd.addColorStop(1, n.color + '0)')
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.ellipse(n.x * W, n.y * H, n.rx * W, n.ry * H, 0, 0, Math.PI * 2)
        ctx.fill()
      }

      // Stars
      for (const s of stars) {
        const tw = 0.4 + 0.6 * Math.abs(Math.sin(t * s.speed * 80 + s.twinkle))
        const scaleX = s.x / 2000 * W
        const scaleY = s.y / 2000 * H
        ctx.beginPath()
        ctx.arc(scaleX, scaleY, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.a * tw})`
        ctx.fill()
      }

      // Dust particles
      for (const d of dust) {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0) d.x = 2000
        if (d.x > 2000) d.x = 0
        if (d.y < 0) d.y = 2000
        if (d.y > 2000) d.y = 0
        const px = d.x / 2000 * W
        const py = d.y / 2000 * H
        ctx.beginPath()
        ctx.arc(px, py, d.r, 0, Math.PI * 2)
        ctx.fillStyle = d.color
        ctx.globalAlpha = d.a * (0.5 + 0.5 * Math.sin(t * 0.02 + d.x))
        ctx.fill()
        ctx.globalAlpha = 1
      }

      t++
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      id="space-canvas"
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
