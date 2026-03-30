interface GlowOrbProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  opacity?: number
}

const sizeMap = {
  sm: 'w-48 h-48',
  md: 'w-72 h-72',
  lg: 'w-[32rem] h-[32rem]',
  xl: 'w-[48rem] h-[48rem]',
}

export function GlowOrb({ size = 'lg', className = '', opacity = 0.08 }: GlowOrbProps) {
  return (
    <div
      aria-hidden
      className={`absolute rounded-full pointer-events-none ${sizeMap[size]} ${className}`}
      style={{
        background: `radial-gradient(ellipse at center, rgba(255, 217, 0, ${opacity}) 0%, transparent 70%)`,
      }}
    />
  )
}
