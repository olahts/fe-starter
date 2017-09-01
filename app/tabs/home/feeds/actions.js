import constants from './constants'
import navconstants from '../constants'
import homeactions from '../actions'
import { api } from '../../../ucomponents/index'

export default {

	navigateTo: ({route, params}) => {
        return (dispatch) => {
            switch (route){
                case navconstants.GO_BACK:
                    dispatch(homeactions.gotoBack(params));
                    break;
                case navconstants.GOTO_FEEDS:
                    dispatch(homeactions.gotoFeeds(params));
                    break;
                case navconstants.GOTO_FEED:
                    dispatch(homeactions.gotoFeed(params));
                    break;
                case navconstants.GOTO_HISTORIES:
                    dispatch(homeactions.gotoHistories(params));
                    break;
                default:
                    break;
            }
        }
    },


    load: ({ user, page }) => {
		const seed = 'feeds';
		return (dispatch) => {
            const url = `/feeds/?user=${user}&page=${page}&results=20`;
            // return api.get(url, { seed, user, page })
            return api.getMock(url, { seed, user, page })
            	.then(res => {
            	    const payload = { page, seed, loading: false, refreshing: false, data: res, error: null};

                    dispatch({
                        type: constants.LOAD_FEEDS,
                        payload,
                    })
                } )
              	.catch(err => {
                    const payload = { page, seed, loading: false, refreshing: false, data: [], error: err};
                    dispatch({
                        type: constants.LOAD_FEEDS,
                        payload,
                    })
                })
        }
    },


    refresh: (params) => {
        return (dispatch) => {
            dispatch({
                type: constants.REFRESH_FEEDS,
                payload: params,
            })
        }
    },

}
