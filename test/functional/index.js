import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import ValueContainer from '../../src/containers/ValueContainer'
import reducer from '../../src/reducers'

const configureStore = (preloadedState) => {
  const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(createLogger())
  )
  return store
}

const store = configureStore({})

ReactDOM.render(
  <Provider store={store}>
    <ValueContainer/>
  </Provider>,
  document.getElementById('root')
)
