import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from '../AppRouter/AppRouter'
import './App.scss'

const App: FC = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App
