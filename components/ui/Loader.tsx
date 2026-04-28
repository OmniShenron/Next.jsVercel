'use client'
import { useEffect, useRef, useState } from 'react'

export default function Loader() {
  const fillRef = useRef<HTMLDivElement>(null)
  const [pct, setPct] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    setTimeout(() => { if (fillRef.current) fillRef.current.classList.add('go') }, 100)
    const start = performance.now()
    const dur = 1900
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setPct(Math.floor(e * 100))
      if (p < 1) requestAnimationFrame(tick)
      else setTimeout(() => setGone(true), 400)
    }
    requestAnimationFrame(tick)
  }, [])

  return (
    <div id="loader" className={gone ? 'gone' : ''}>
      <div className="loader-name">SSP</div>
      <div className="loader-bar-wrap">
        <div ref={fillRef} className="loader-bar-fill" />
      </div>
      <div className="loader-pct">{String(pct).padStart(3, '0')}%</div>
    </div>
  )
}
