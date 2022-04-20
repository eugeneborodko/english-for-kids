import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../../router'
import Layout from '../Layout/Layout'

const AppRouter: FC = () => {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => {
          const Component = route.element

          return (
            <Route key={route.path} element={<Component />} path={route.path} />
          )
        })}
      </Routes>
    </Layout>
  )
}

export default AppRouter
