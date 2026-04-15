import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  accent?: boolean
  accentColor?: 'purple' | 'teal'
}

export function Card({ children, className = '', accent = false, accentColor = 'purple' }: CardProps) {
  const accentClass = accent
    ? accentColor === 'teal'
      ? 'border-l-4 border-l-rad-teal'
      : 'before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-rad-purple before:to-rad-teal before:rounded-t-2xl'
    : ''

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-sm overflow-hidden ${accentClass} ${className}`}
      style={{ boxShadow: '0 2px 12px rgba(91,45,142,0.08)' }}
    >
      {children}
    </div>
  )
}
