import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import thunk from 'redux-thunk'
import Navigator from './Navigator'
import reducers from './reducers'

const store = createStore( reducers, applyMiddleware(thunk) );

const Nav = ({ dispatch, nav }) => <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;

const mapStateToProps = ({ nav }) => ({ nav });

const NavState = connect( mapStateToProps )(Nav);

const App = () => {
  return (
      <Provider store={store}>
        <NavState />
      </Provider>
    )
}

export default App


