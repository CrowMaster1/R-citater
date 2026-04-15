import { LayoutGrid, Shuffle } from 'lucide-react'
import type { TabId } from '../../types'

interface TabBarProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

const tabs: { id: TabId; label: string; Icon: typeof LayoutGrid }[] = [
  { id: 'emner',      label: 'Emner',      Icon: LayoutGrid },
  { id: 'tilfaeldig', label: 'Tilfældig',  Icon: Shuffle },
]

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-white tab-bar-safe z-10"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="flex max-w-md mx-auto">
        {tabs.map(({ id, label, Icon }) => {
          const active = activeTab === id
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex-1 flex flex-col items-center gap-1 pt-2 pb-1 text-[11px] font-semibold transition-colors ${
                active ? 'text-rad-teal' : 'text-[var(--muted)]'
              }`}
            >
              <Icon size={22} strokeWidth={active ? 2.5 : 2} />
              {label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
