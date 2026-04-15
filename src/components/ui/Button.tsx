import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  children: ReactNode
  fullWidth?: boolean
}

export function Button({ variant = 'primary', children, fullWidth = false, className = '', ...props }: ButtonProps) {
  const base = 'flex items-center justify-center gap-2 rounded-2xl font-bold text-base transition-all active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed'
  const width = fullWidth ? 'w-full' : ''

  const styles = {
    primary: 'px-5 py-3.5 bg-gradient-to-br from-rad-purple to-rad-teal text-white shadow-sm',
    ghost:   'px-5 py-3.5 border-2 border-rad-purple text-rad-purple bg-transparent',
  }

  return (
    <button className={`${base} ${width} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
