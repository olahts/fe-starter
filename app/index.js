import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import NavState, { navreducers } from './utils/nav'
import { authreducers } from './auth'
import { tabsreducers } from './tabs'

const reducers = combineReducers({
  auth: authreducers,
  tabs: tabsreducers,
  nav: navreducers,
})

const store = createStore( reducers, applyMiddleware(thunk) )

const App = () => {
  return (
      <Provider store={store}>
        <NavState />
      </Provider>
    )
}

export default App
