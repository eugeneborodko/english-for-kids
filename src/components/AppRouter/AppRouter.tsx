import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../../router'

const AppRouter: FC = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const Component = route.element

        return (
          <Route key={route.path} element={<Component />} path={route.path} />
        )
      })}
    </Routes>
  )
}

export default AppRouter
