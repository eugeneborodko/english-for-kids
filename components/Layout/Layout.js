import Head from 'next/head'

import Header from './../Header/Header'
import Menu from './../Menu/Menu'

const Layout = ({ children, title = 'English for kids' }) => <>
  <Head>
    <title>{title} | English for kids</title>
  </Head>
  <Menu />
  <div className="container">
    <Header />
  </div>
  <main className="main">
    {children}
  </main>
</>

export default Layout