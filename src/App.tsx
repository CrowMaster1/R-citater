import { useState } from 'react'
import { Header } from './components/layout/Header'
import { TabBar } from './components/layout/TabBar'
import { CategoryList } from './components/categories/CategoryList'
import { CategoryView } from './components/categories/CategoryView'
import { QuoteGenerator } from './components/quotes/QuoteGenerator'
import type { TabId, Category } from './types'

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('emner')
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab)
    setSelectedCategory(null)
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <Header />

      <main className="flex-1 px-4 pt-5 pb-28 max-w-md mx-auto w-full">
        {activeTab === 'emner' && (
          selectedCategory
            ? <CategoryView category={selectedCategory} onBack={() => setSelectedCategory(null)} />
            : <CategoryList onSelect={setSelectedCategory} />
        )}
        {activeTab === 'tilfaeldig' && <QuoteGenerator />}
      </main>

      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}
