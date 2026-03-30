import { useReducedMotion } from 'framer-motion'

// Pre-computed particle configs – stable across renders, no random on each mount
const PARTICLES: {
  id: number
  left: string
  delay: string
  duration: string
  size: number
  drift: string
}[] = [
  { id: 0,  left: '3%',  delay: '0s',    duration: '9s',  size: 2, drift: '28px'  },
  { id: 1,  left: '8%',  delay: '1.8s',  duration: '11s', size: 1, drift: '-22px' },
  { id: 2,  left: '14%', delay: '3.2s',  duration: '8s',  size: 3, drift: '35px'  },
  { id: 3,  left: '20%', delay: '0.6s',  duration: '13s', size: 1, drift: '-18px' },
  { id: 4,  left: '26%', delay: '4.4s',  duration: '10s', size: 4, drift: '42px'  },
  { id: 5,  left: '31%', delay: '2.2s',  duration: '7s',  size: 1, drift: '-30px' },
  { id: 6,  left: '37%', delay: '6.1s',  duration: '12s', size: 2, drift: '25px'  },
  { id: 7,  left: '43%', delay: '1.1s',  duration: '9s',  size: 1, drift: '-35px' },
  { id: 8,  left: '48%', delay: '3.7s',  duration: '11s', size: 3, drift: '45px'  },
  { id: 9,  left: '54%', delay: '5.3s',  duration: '8s',  size: 4, drift: '-22px' },
  { id: 10, left: '59%', delay: '0.9s',  duration: '10s', size: 1, drift: '32px'  },
  { id: 11, left: '65%', delay: '2.7s',  duration: '13s', size: 2, drift: '-28px' },
  { id: 12, left: '71%', delay: '4.9s',  duration: '9s',  size: 3, drift: '20px'  },
  { id: 13, left: '76%', delay: '7.2s',  duration: '11s', size: 1, drift: '-40px' },
  { id: 14, left: '82%', delay: '8.5s',  duration: '8s',  size: 2, drift: '38px'  },
  { id: 15, left: '88%', delay: '6.8s',  duration: '14s', size: 4, drift: '-25px' },
  { id: 16, left: '93%', delay: '9.4s',  duration: '10s', size: 1, drift: '30px'  },
  { id: 17, left: '97%', delay: '7.8s',  duration: '7s',  size: 3, drift: '-15px' },
  // Second pass – slightly offset positions for denser coverage
  { id: 18, left: '11%', delay: '5.5s',  duration: '12s', size: 2, drift: '33px'  },
  { id: 19, left: '22%', delay: '10.1s', duration: '9s',  size: 1, drift: '-27px' },
  { id: 20, left: '34%', delay: '11.4s', duration: '11s', size: 3, drift: '48px'  },
  { id: 21, left: '46%', delay: '8.9s',  duration: '8s',  size: 2, drift: '-20px' },
  { id: 22, left: '58%', delay: '12.2s', duration: '10s', size: 1, drift: '36px'  },
  { id: 23, left: '70%', delay: '3.4s',  duration: '13s', size: 4, drift: '-42px' },
  { id: 24, left: '80%', delay: '11.7s', duration: '9s',  size: 2, drift: '22px'  },
  { id: 25, left: '91%', delay: '6.3s',  duration: '7s',  size: 1, drift: '-18px' },
]

export function MagicBackground() {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Slow aurora shimmer across the top */}
      <div className="magic-aurora" />

      {/* Slow-drifting ambient gradient blobs */}
      <div className="magic-blob magic-blob-1" />
      <div className="magic-blob magic-blob-2" />
      <div className="magic-blob magic-blob-3" />
      <div className="magic-blob magic-blob-4" />

      {/* Floating sparkle particles */}
      {PARTICLES.map(p => (
        <div
          key={p.id}
          className="magic-particle"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            width: `${p.size}px`,
            height: `${p.size}px`,
            // @ts-expect-error CSS custom property
            '--pdrift': p.drift,
          }}
        />
      ))}
    </div>
  )
}
