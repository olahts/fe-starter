import { combineReducers } from 'redux'
import idreducers from './id/reducers'
import navreducers from './navreducers'
import homereducers from './home/reducers'
import messagereducers from './message/reducers'
import searchreducers from './search/reducers'

export default combineReducers({
    nav: navreducers,
    id: idreducers,
    home: homereducers,
    message: messagereducers,
    search: searchreducers,
})
