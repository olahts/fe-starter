import constants from './constants'
import homeactions from '../../tabs/home/actions'
import idactions from '../../tabs/id/actions'
import messageactions from '../../tabs/message/actions'
import searchactions from '../../tabs/search/actions'
import { api } from '../'

const actions = {
    home:  homeactions,
    id: idactions,
    messsage: messageactions,
    search: searchactions,
};

export default {

	navigateTo: ({route, params}) => {
        return (dispatch) => {
            switch (route){
                case 'Back':
                    dispatch(actions[params.origin].gotoBack(params));
                    break;
                default:
                    break;
            }
        }
    },


    load: ({ user, page }) => {
		const seed = 'history';
		return (dispatch) => {
            const url = `/${seed}/?user=${user}&page=${page}&results=20`;
            // return api.get(url, { seed, user, page })
            return api.getMock(url, { seed, user, page })
            	.then(res => res )
              	.catch(err => err)
        }
    },

    refresh: (params) => {
        return (dispatch) => {
            dispatch({
                type: constants.REFRESH_HISTORY,
                payload: params,
            })
        }
    },

}
