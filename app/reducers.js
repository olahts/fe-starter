import { combineReducers } from 'redux'
import navreducers from './navreducers'
import authreducers from './auth/reducers'
import tabsreducers from './tabs/reducers'

export default combineReducers({
    auth: authreducers,
    tabs: tabsreducers,
    nav: navreducers,
})
