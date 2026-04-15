import { useState, useCallback } from 'react'
import { Shuffle } from 'lucide-react'
import { Button } from '../ui/Button'
import { TypeBadge } from '../ui/Badge'
import { getAllQuotes } from '../../data/categories'

const allQuotes = getAllQuotes()

function randomIndex(current: number, max: number): number {
  if (max <= 1) return 0
  let next = current
  while (next === current) next = Math.floor(Math.random() * max)
  return next
}

export function QuoteGenerator() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * allQuotes.length))
  const [fading, setFading] = useState(false)

  const nextQuote = useCallback(() => {
    setFading(true)
    setTimeout(() => {
      setIndex(i => randomIndex(i, allQuotes.length))
      setFading(false)
    }, 180)
  }, [])

  const quote = allQuotes[index]

  return (
    <div className="flex flex-col gap-4">
      <div className="px-1 mb-1">
        <h2 className="text-lg font-extrabold text-[var(--text)]">Tilfældig citat</h2>
        <p className="text-xs text-[var(--muted)] mt-0.5">Fra alle {allQuotes.length} citater på tværs af emner</p>
      </div>

      <div
        className="transition-all duration-200 rounded-2xl bg-white overflow-hidden"
        style={{
          opacity: fading ? 0 : 1,
          transform: fading ? 'translateY(6px)' : 'translateY(0)',
          boxShadow: '0 2px 16px rgba(91,45,142,0.1)',
        }}
      >
        {/* Gradient accent bar */}
        <div className="h-1" style={{ background: 'linear-gradient(to right, #5B2D8E, #0D9488)' }} />

        <div className="p-6">
          <span
            className="block text-7xl leading-none text-rad-teal font-serif mb-2"
            style={{ opacity: 0.2 }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <p className="text-xl italic font-light leading-relaxed text-[var(--text)] mb-5">
            {quote.text}
          </p>

          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-rad-purple">{quote.author}</p>
              {quote.year && <p className="text-xs text-[var(--muted)] mt-0.5">{quote.year}</p>}
              <p className="text-[11px] text-[var(--muted)] mt-1 italic">{quote.categoryName}</p>
            </div>
            <TypeBadge type={quote.type} />
          </div>
        </div>
      </div>

      <Button fullWidth onClick={nextQuote} disabled={fading}>
        <Shuffle size={18} />
        Nyt tilfældigt citat
      </Button>

      <p className="text-center text-xs text-[var(--muted)]">
        {index + 1} / {allQuotes.length}
      </p>
    </div>
  )
}
