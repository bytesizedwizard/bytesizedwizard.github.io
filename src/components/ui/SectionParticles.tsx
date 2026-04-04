/**
 * SectionParticles — a quieter particle mesh for non-Hero sections.
 *
 * Differences from HeroParticles:
 * – Canvas sized to the parent element (not window) via ResizeObserver
 * – No mouse repulsion — purely ambient drift
 * – ~45 particles, lower opacity + connection alpha
 * – Slower speed, shorter connection distance
 * – Same dpr + theme-aware colour wiring
 */
import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

const COUNT        = 45
const CONNECT_DIST = 110
const MAX_SPEED    = 1.6
const BASE_SPEED   = 0.28

function themeRGB(): string {
  return document.documentElement.classList.contains('light')
    ? '138, 107, 0'
    : '255, 217, 0'
}

export function SectionParticles() {
  const canvasRef    = useRef<HTMLCanvasElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    let W = 0
    let H = 0
    let rafId = 0
    let particles: Particle[] = []

    // ── Sizing + particle init ──────────────────────────────────────────────
    // Uses offsetWidth/Height (parent element dims) — NOT window dimensions.
    // Setting canvas.width resets the 2D context state so ctx.scale is safe.
    const init = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width  = W * dpr
      canvas.height = H * dpr
      ctx.scale(dpr, dpr)

      particles = Array.from({ length: COUNT }, () => ({
        x:       Math.random() * W,
        y:       Math.random() * H,
        vx:      (Math.random() - 0.5) * BASE_SPEED * 2,
        vy:      (Math.random() - 0.5) * BASE_SPEED * 2,
        radius:  Math.random() * 1.2 + 0.8,
        opacity: Math.random() * 0.18 + 0.12,   // 0.12 – 0.30
      }))
    }

    // ── Render loop ─────────────────────────────────────────────────────────
    const tick = () => {
      ctx.clearRect(0, 0, W, H)
      const col = themeRGB()

      for (const p of particles) {
        p.vx *= 0.98
        p.vy *= 0.98

        const spd = Math.hypot(p.vx, p.vy)
        if (spd < 0.05) {
          p.vx += (Math.random() - 0.5) * 0.12
          p.vy += (Math.random() - 0.5) * 0.12
        }
        if (spd > MAX_SPEED) {
          p.vx = (p.vx / spd) * MAX_SPEED
          p.vy = (p.vy / spd) * MAX_SPEED
        }

        p.x += p.vx
        p.y += p.vy

        if (p.x < p.radius)     { p.x = p.radius;     p.vx =  Math.abs(p.vx) * 0.7 }
        if (p.x > W - p.radius) { p.x = W - p.radius; p.vx = -Math.abs(p.vx) * 0.7 }
        if (p.y < p.radius)     { p.y = p.radius;     p.vy =  Math.abs(p.vy) * 0.7 }
        if (p.y > H - p.radius) { p.y = H - p.radius; p.vy = -Math.abs(p.vy) * 0.7 }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${col}, ${p.opacity})`
        ctx.fill()
      }

      // Connection lines — lower alpha than Hero
      for (let i = 0; i < particles.length - 1; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.14
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${col}, ${alpha})`
            ctx.lineWidth   = 0.5
            ctx.stroke()
          }
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    // ── ResizeObserver — re-inits when section changes size ─────────────────
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(rafId)
      init()
      tick()
    })

    ro.observe(canvas)
    // Also call explicitly in case ResizeObserver fires after first paint
    init()
    tick()

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden
    />
  )
}
