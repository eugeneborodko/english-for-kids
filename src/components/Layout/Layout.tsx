import { FC, ReactNode } from 'react'
import Container from '../Container/Container'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <Container>
      <Menu />
      <Header />
      {children}
    </Container>
  )
}

export default Layout