/**
 * HeroParticles — canvas particle mesh with mouse repulsion.
 *
 * Fix applied (per 21st.dev Aether Flow pattern):
 * – canvas sized to window.innerWidth/innerHeight (not offsetWidth which
 *   can be 0 before layout resolves)
 * – particles spawned AFTER dimensions are set (was the root cause)
 * – mouse uses e.clientX/clientY directly (canvas fills full viewport)
 * – devicePixelRatio support for crisp rendering on HiDPI screens
 * – window resize re-inits particles cleanly
 */
import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseOpacity: number
}

const COUNT          = 100
const CONNECT_DIST   = 140   // logical px
const REPEL_RADIUS   = 160   // logical px
const REPEL_STRENGTH = 5     // force multiplier
const MAX_SPEED      = 4
const BASE_SPEED     = 0.5

function themeRGB(): string {
  return document.documentElement.classList.contains('light')
    ? '180, 120, 0'
    : '255, 217, 0'
}

export function HeroParticles() {
  const canvasRef    = useRef<HTMLCanvasElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    let W = 0        // logical width
    let H = 0        // logical height
    let rafId = 0
    const mouse = { x: -9999, y: -9999 }
    let particles: Particle[] = []

    // ── Canvas sizing + particle init ────────────────────────────────────
    //   Must set W/H first, then spawn — this was the root bug.
    const init = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width  = W * dpr
      canvas.height = H * dpr
      ctx.scale(dpr, dpr)

      particles = Array.from({ length: COUNT }, () => ({
        x:           Math.random() * W,
        y:           Math.random() * H,
        vx:          (Math.random() - 0.5) * BASE_SPEED * 2,
        vy:          (Math.random() - 0.5) * BASE_SPEED * 2,
        radius:      Math.random() * 1.6 + 1.2,
        baseOpacity: Math.random() * 0.3 + 0.4,
      }))
    }

    // ── Main render loop ─────────────────────────────────────────────────
    const tick = () => {
      ctx.clearRect(0, 0, W, H)
      const col = themeRGB()

      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d2 = dx * dx + dy * dy

        if (d2 < REPEL_RADIUS * REPEL_RADIUS && d2 > 1) {
          const d = Math.sqrt(d2)
          const f = ((REPEL_RADIUS - d) / REPEL_RADIUS) * REPEL_STRENGTH
          p.vx += (dx / d) * f
          p.vy += (dy / d) * f
        }

        // Dampen + nudge stalled particles
        p.vx *= 0.96
        p.vy *= 0.96
        const spd = Math.hypot(p.vx, p.vy)
        if (spd < 0.08) {
          p.vx += (Math.random() - 0.5) * 0.2
          p.vy += (Math.random() - 0.5) * 0.2
        }
        if (spd > MAX_SPEED) {
          p.vx = (p.vx / spd) * MAX_SPEED
          p.vy = (p.vy / spd) * MAX_SPEED
        }

        p.x += p.vx
        p.y += p.vy

        // Soft-bounce edges
        if (p.x < p.radius)     { p.x = p.radius;     p.vx =  Math.abs(p.vx) * 0.7 }
        if (p.x > W - p.radius) { p.x = W - p.radius; p.vx = -Math.abs(p.vx) * 0.7 }
        if (p.y < p.radius)     { p.y = p.radius;     p.vy =  Math.abs(p.vy) * 0.7 }
        if (p.y > H - p.radius) { p.y = H - p.radius; p.vy = -Math.abs(p.vy) * 0.7 }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${col}, ${p.baseOpacity})`
        ctx.fill()
      }

      // Connection lines
      for (let i = 0; i < particles.length - 1; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.3
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${col}, ${alpha})`
            ctx.lineWidth   = 0.8
            ctx.stroke()
          }
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    // ── Event handlers ───────────────────────────────────────────────────
    // Canvas fills the viewport → clientX/clientY = canvas coordinates (logical)
    const onMove  = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onLeave = ()              => { mouse.x = -9999;     mouse.y = -9999 }
    const onResize = () => {
      cancelAnimationFrame(rafId)
      init()
      tick()
    }

    init()
    tick()

    window.addEventListener('mousemove',  onMove,   { passive: true })
    window.addEventListener('mouseleave', onLeave,  { passive: true })
    window.addEventListener('resize',     onResize, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove',  onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize',     onResize)
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
