import type { Category } from '../../types'
import { categories } from '../../data/categories'
import { ChevronRight } from 'lucide-react'

interface CategoryListProps {
  onSelect: (category: Category) => void
}

export function CategoryList({ onSelect }: CategoryListProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="px-1 mb-1">
        <h2 className="text-lg font-extrabold text-[var(--text)]">Vælg et emne</h2>
        <p className="text-xs text-[var(--muted)] mt-0.5">
          {categories.reduce((sum, c) => sum + c.quotes.length, 0)} citater fordelt på {categories.length} emner
        </p>
      </div>

      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat)}
          className={`w-full text-left rounded-2xl p-4 border transition-all active:scale-[0.98] ${cat.color.bg} ${cat.color.border} border`}
          style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl leading-none">{cat.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className={`font-extrabold text-base ${cat.color.text}`}>{cat.name}</div>
              <div className="text-xs text-[var(--muted)] mt-0.5 truncate">{cat.description}</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cat.color.pill}`}>
                {cat.quotes.length}
              </span>
              <ChevronRight size={16} className="text-[var(--muted)]" />
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
