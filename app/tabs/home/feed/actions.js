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
		const seed = 'feed';
		return (dispatch) => {
            const url = `/${seed}/?user=${user}&page=${page}&results=20`;
            // return api.get(url, { seed, user, page })
            return api.getMock(url, { seed, user, page })
                .then(res => {
                    dispatch({
                        type: constants.LOAD_FEED,
                        payload: res,
                    })
                } )
                .catch(err => {
                    dispatch({
                        type: constants.LOAD_FEED,
                        payload: err,
                    })
                })
        }
    },

    refresh: (params) => {
        return (dispatch) => {
            dispatch({
                type: constants.REFRESH_FEED,
                payload: params,
            })
        }
    },

}
