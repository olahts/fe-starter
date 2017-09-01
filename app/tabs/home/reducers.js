import { combineReducers } from 'redux'
import navreducers from './navreducers'
import feedsreducers from './feeds/reducers'
import feedreducers from './feed/reducers'

export default combineReducers({
    feeds: feedsreducers,
    feed: feedreducers,
    nav: navreducers,
});
