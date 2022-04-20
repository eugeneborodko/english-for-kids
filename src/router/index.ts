import HomePage from '../pages/HomePage/HomePage'
import { HOME_ROUTE } from '../constants/internalLinks'
import CardsPage from '../pages/CardsPage/CardsPage'

export const routes = [
  { path: HOME_ROUTE, element: HomePage },
  {path: `${HOME_ROUTE}/:id`, element: CardsPage}
]
