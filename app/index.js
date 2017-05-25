import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { 
	authreducer,
	idreducer,
	profilereducer,
	requestreducer,
	navreducer,
  AppWithNavigationState,
} from "./containers"

const reducers = combineReducers({
  auth: authreducer,
  id: idreducer,
  profile: profilereducer,
  request: requestreducer,
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