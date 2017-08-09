import React from 'react'
import { connect } from 'react-redux';
import { combineReducers } from 'redux'
import NavState, { navreducers } from './utils/nav'
import homereducers from './home/reducers'
import idreducers from './id/reducers'
import messagereducers from './message/reducers'
import searchreducers from './search/reducers'

export const tabsreducers = combineReducers({
  home: homereducers,
  id: idreducers,
  message: messagereducers,
  search: searchreducers,
  nav: navreducers,
})

const Tabs = (props) => {
  return (
    	<NavState />
  )
}

export default Tabs
