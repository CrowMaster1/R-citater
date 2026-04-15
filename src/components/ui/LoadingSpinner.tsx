import { useEffect, useState } from 'react'

const messages = [
  'Konsulterer Rawls...',
  'Tjekker klimaaftrykket...',
  'Vejer evidensen...',
  'Spørger Vestager...',
  'Beregner frihedsindeks...',
  'Validerer med EU-standarder...',
]

export function LoadingSpinner() {
  const [msgIndex, setMsgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex(i => (i + 1) % messages.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-rad-purple-lt" />
        <div className="absolute inset-0 rounded-full border-4 border-t-rad-purple border-r-rad-teal border-transparent animate-spin" />
      </div>
      <p className="text-sm text-[var(--muted)] italic transition-all duration-500">
        {messages[msgIndex]}
      </p>
    </div>
  )
}
