import { FC, ReactNode } from 'react'
import Container from '../Container/Container'
import Header from '../Header/Header'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

export default Layout