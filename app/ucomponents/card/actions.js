import constants from './constants'
import homeactions from '../../tabs/home/actions'
import idactions from '../../tabs/id/actions'
import messageactions from '../../tabs/message/actions'
import searchactions from '../../tabs/search/actions'
import { api, validate } from '../'

const actions = {
    home:  homeactions,
    id: idactions,
    messsage: messageactions,
    search: searchactions,
};

export default {

	load: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.LOAD_ID,
				payload: params,
			})
		}
	},

	refresh: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.REFRESH_ID,
				payload: params,
			})
		}
	},



    navigateTo: ({route, params}) => {
		return (dispatch) => {
            switch (route){
                case 'Histories':
                    dispatch(actions[params.origin].gotoHistories(params));
                    break;
                default:
                	break;
            }
        }
    },

}
