'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const trailsRef = useRef<HTMLDivElement[]>([])
  const pos   = useRef({ x: -100, y: -100 })
  const ring  = useRef({ x: -100, y: -100 })
  const TRAIL = 8

  useEffect(() => {
    // create trail dots
    const container = document.createElement('div')
    container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9997;'
    document.body.appendChild(container)
    const trails: HTMLDivElement[] = []
    for (let i = 0; i < TRAIL; i++) {
      const d = document.createElement('div')
      d.style.cssText = `position:absolute;border-radius:50%;pointer-events:none;transform:translate(-50%,-50%);`
      d.style.width  = `${6 - i * 0.5}px`
      d.style.height = `${6 - i * 0.5}px`
      const opacity = 0.6 - i * 0.07
      d.style.background = i % 2 === 0 ? `rgba(155,109,255,${opacity})` : `rgba(0,245,255,${opacity})`
      d.style.filter = 'blur(1px)'
      container.appendChild(d)
      trails.push(d)
    }
    trailsRef.current = trails

    const history: { x: number; y: number }[] = Array.from({ length: TRAIL + 4 }, () => ({ x: -100, y: -100 }))

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)

    let raf: number
    const anim = () => {
      // Ring lag
      ring.current.x += (pos.current.x - ring.current.x) * 0.1
      ring.current.y += (pos.current.y - ring.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      // Trail history
      history.unshift({ ...pos.current })
      history.pop()
      trails.forEach((t, i) => {
        const h = history[i + 3]
        if (h) { t.style.left = h.x + 'px'; t.style.top = h.y + 'px' }
      })
      raf = requestAnimationFrame(anim)
    }
    raf = requestAnimationFrame(anim)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      document.body.removeChild(container)
    }
  }, [])

  return (
    <div className="cursor" style={{ position: 'fixed', zIndex: 9999, pointerEvents: 'none' }}>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ position: 'fixed', pointerEvents: 'none', width: 8, height: 8, background: '#fff', borderRadius: '50%', transform: 'translate(-50%,-50%)', mixBlendMode: 'difference', zIndex: 9999 }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ position: 'fixed', pointerEvents: 'none', width: 32, height: 32, border: '1px solid rgba(155,109,255,0.6)', borderRadius: '50%', transform: 'translate(-50%,-50%)', zIndex: 9998 }}
      />
    </div>
  )
}
