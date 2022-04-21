import { createContext } from 'react'

export interface ContextProps {
  currentCategory: string
  setCurrentCategory: (category: string) => void
}

export const AppContext = createContext<ContextProps | null>(null)
