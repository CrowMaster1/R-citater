import { useState } from 'react'
import { ArrowLeft, ArrowRight, Shuffle } from 'lucide-react'
import { TypeBadge } from '../ui/Badge'
import type { Category } from '../../types'

interface CategoryViewProps {
  category: Category
  onBack: () => void
}

export function CategoryView({ category, onBack }: CategoryViewProps) {
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)

  const total = category.quotes.length
  const quote = category.quotes[index]

  const goTo = (next: number) => {
    if (fading) return
    setFading(true)
    setTimeout(() => {
      setIndex(next)
      setFading(false)
    }, 150)
  }

  const prev = () => goTo(index === 0 ? total - 1 : index - 1)
  const next = () => goTo(index === total - 1 ? 0 : index + 1)

  const pickRandom = () => {
    let r = index
    while (r === index && total > 1) r = Math.floor(Math.random() * total)
    goTo(r)
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div
        className={`sticky top-0 z-10 -mx-4 px-4 pt-3 pb-3 ${category.color.bg} border-b ${category.color.border}`}
      >
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <button
            onClick={onBack}
            className="p-1.5 rounded-xl bg-white/70 backdrop-blur-sm"
            aria-label="Tilbage"
          >
            <ArrowLeft size={20} className={category.color.text} />
          </button>
          <span className="text-2xl">{category.emoji}</span>
          <div className="flex-1">
            <h2 className={`font-extrabold text-base leading-tight ${category.color.text}`}>{category.name}</h2>
            <p className="text-[11px] text-[var(--muted)]">{index + 1} / {total}</p>
          </div>
          <button
            onClick={pickRandom}
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-white/70 backdrop-blur-sm"
            style={{ color: 'var(--rad-teal)' }}
          >
            <Shuffle size={14} />
            Tilfældig
          </button>
        </div>
      </div>

      {/* Quote card */}
      <div
        className="transition-all duration-150 rounded-2xl overflow-hidden bg-white"
        style={{
          opacity: fading ? 0 : 1,
          transform: fading ? 'translateY(6px)' : 'translateY(0)',
          boxShadow: '0 2px 16px rgba(91,45,142,0.10)',
        }}
      >
        <div className={`h-1 ${category.color.bg}`} style={{ background: undefined }}>
          <div className="h-full" style={{ background: `linear-gradient(to right, #5B2D8E, #0D9488)` }} />
        </div>

        <div className="p-6">
          <span
            className={`block text-7xl leading-none font-serif mb-2 ${category.color.text}`}
            style={{ opacity: 0.2 }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <p className="text-xl italic font-light leading-relaxed text-[var(--text)] mb-6">
            {quote.text}
          </p>

          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0">
              <p className={`text-sm font-semibold ${category.color.text}`}>{quote.author}</p>
              {quote.year && <p className="text-xs text-[var(--muted)] mt-0.5">{quote.year}</p>}
            </div>
            <TypeBadge type={quote.type} />
          </div>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div className="flex gap-3">
        <button
          onClick={prev}
          disabled={fading}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border border-[var(--border)] bg-white text-sm font-semibold text-[var(--muted)] active:scale-[0.97] transition-transform"
        >
          <ArrowLeft size={16} />
          Forrige
        </button>
        <button
          onClick={next}
          disabled={fading}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold text-white active:scale-[0.97] transition-transform`}
          style={{ background: 'linear-gradient(135deg, #5B2D8E, #0D9488)' }}
        >
          Næste
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}
