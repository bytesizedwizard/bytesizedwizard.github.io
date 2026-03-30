import { useRef, useCallback } from 'react'

export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement>(null)

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = ref.current
      if (!el) return
      const { left, top, width, height } = el.getBoundingClientRect()
      const cx = left + width / 2
      const cy = top + height / 2
      const dx = (e.clientX - cx) * strength
      const dy = (e.clientY - cy) * strength
      el.style.transform = `translate(${dx}px, ${dy}px)`
    },
    [strength],
  )

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
    el.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
