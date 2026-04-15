import { useState } from 'react'
import { ArrowLeft, Shuffle } from 'lucide-react'
import { TypeBadge } from '../ui/Badge'
import type { Category, CategoryQuote } from '../../types'

interface CategoryViewProps {
  category: Category
  onBack: () => void
}

export function CategoryView({ category, onBack }: CategoryViewProps) {
  const [highlighted, setHighlighted] = useState<number | null>(null)

  const pickRandom = () => {
    const idx = Math.floor(Math.random() * category.quotes.length)
    const quote = category.quotes[idx]
    setHighlighted(quote.id)
    // Scroll to it
    setTimeout(() => {
      document.getElementById(`quote-${quote.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 50)
  }

  return (
    <div>
      {/* Sticky category header */}
      <div
        className={`sticky top-0 z-10 -mx-4 px-4 pt-3 pb-3 mb-4 ${category.color.bg} border-b ${category.color.border}`}
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
            <p className="text-[11px] text-[var(--muted)]">{category.quotes.length} citater</p>
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

      {/* Quote list */}
      <div className="flex flex-col gap-3">
        {category.quotes.map(quote => (
          <QuoteItem
            key={quote.id}
            quote={quote}
            category={category}
            highlighted={highlighted === quote.id}
          />
        ))}
      </div>
    </div>
  )
}

interface QuoteItemProps {
  quote: CategoryQuote
  category: Category
  highlighted: boolean
}

function QuoteItem({ quote, category, highlighted }: QuoteItemProps) {
  return (
    <div
      id={`quote-${quote.id}`}
      className={`rounded-2xl p-4 transition-all duration-500 ${
        highlighted
          ? `${category.color.bg} ${category.color.border} border-2`
          : 'bg-white border border-[var(--border)]'
      }`}
      style={{ boxShadow: highlighted ? `0 4px 20px rgba(0,0,0,0.1)` : '0 1px 4px rgba(0,0,0,0.05)' }}
    >
      {/* Decorative quote mark */}
      <span
        className={`block text-4xl leading-none font-serif mb-1 ${highlighted ? category.color.text : 'text-[var(--border)]'}`}
        aria-hidden="true"
        style={{ opacity: highlighted ? 0.4 : 0.6 }}
      >
        &ldquo;
      </span>

      <p className="text-[15px] leading-relaxed text-[var(--text)] mb-3">
        {quote.text}
      </p>

      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className={`text-xs font-semibold truncate ${highlighted ? category.color.text : 'text-rad-purple'}`}>
            {quote.author}
          </p>
          {quote.year && (
            <p className="text-[11px] text-[var(--muted)]">{quote.year}</p>
          )}
        </div>
        <TypeBadge type={quote.type} />
      </div>
    </div>
  )
}
