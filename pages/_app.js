import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './../store/reducers'

import '../styles/globals.scss'

const store = createStore(rootReducer)

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
