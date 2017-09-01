import { combineReducers } from 'redux'
import navreducers from './navreducers'
import cardreducers from './card/reducers'

export default combineReducers({
    card: cardreducers,
    nav: navreducers,
});
