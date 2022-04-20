import { FC } from 'react'
import PreviewCardList from '../PreviewCardList/PreviewCardList'
import Header from '../Header/Header'
import './App.scss'

const App: FC = () => {
  return (
    <>
      <Header />
      <PreviewCardList />
    </>
  )
}

export default App
