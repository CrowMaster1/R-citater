export interface CategoryQuote {
  id: number
  text: string
  author: string
  year?: string
  type: 'Radikale' | 'EU' | 'Filosofi' | 'Fiktiv' | 'Partiprogram'
}

export interface CategoryColor {
  bg: string
  text: string
  accent: string
  border: string
  pill: string
}

export interface Category {
  id: string
  name: string
  emoji: string
  description: string
  color: CategoryColor
  quotes: CategoryQuote[]
}

export type TabId = 'emner' | 'tilfaeldig'
