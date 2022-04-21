import { FC, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContext } from '../../context'
import AppRouter from '../AppRouter/AppRouter'

import './App.scss'

const App: FC = () => {
  const [currentCategory, setCurrentCategory] = useState<string>('')

  return (
    <AppContext.Provider
      value={{
        currentCategory,
        setCurrentCategory,
      }}
    >
      <Router>
        <AppRouter />
      </Router>
    </AppContext.Provider>
  )
}

export default App
