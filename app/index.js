import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { authreducer} from './auth'
import { idreducer} from './id'
import { homereducer} from './home'
import { messagereducer} from './message'
import { AppWithNavigationState, navreducer } from './utils/nav'

const reducers = combineReducers({
  auth: authreducer,
  id: idreducer,
  home: homereducer,
  message: messagereducer,
  nav: navreducer,
})

const store = createStore( reducers, applyMiddleware(thunk) )

const App = () => {
  return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
}

export default App
