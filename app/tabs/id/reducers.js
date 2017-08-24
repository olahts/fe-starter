import { combineReducers } from 'redux'
import navreducers from './navreducers'
import cardreducers from '../../ucomponents/card/reducers'
import historiesreducers from '../../ucomponents/histories/reducers'

export default combineReducers({
    card: cardreducers,
    histories: historiesreducers,
    nav: navreducers,
});
