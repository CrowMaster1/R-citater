type BadgeVariant = 'radikale' | 'eu' | 'filosofi' | 'fiktiv' | 'partiprogram'

interface BadgeProps {
  variant: BadgeVariant
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  radikale:    'bg-purple-100 text-purple-700',
  eu:          'bg-blue-100 text-blue-700',
  filosofi:    'bg-indigo-100 text-indigo-700',
  fiktiv:      'bg-amber-100 text-amber-800',
  partiprogram:'bg-teal-100 text-teal-700',
}

const variantLabels: Record<BadgeVariant, string> = {
  radikale:    'Radikale',
  eu:          'EU',
  filosofi:    'Filosofi',
  fiktiv:      'Fiktiv',
  partiprogram:'Partiprogram',
}

export function Badge({ variant, children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children ?? variantLabels[variant]}
    </span>
  )
}

export function TypeBadge({ type }: { type: 'Radikale' | 'EU' | 'Filosofi' | 'Fiktiv' | 'Partiprogram' }) {
  const map: Record<string, BadgeVariant> = {
    Radikale:    'radikale',
    EU:          'eu',
    Filosofi:    'filosofi',
    Fiktiv:      'fiktiv',
    Partiprogram:'partiprogram',
  }
  return <Badge variant={map[type]}>{type}</Badge>
}
