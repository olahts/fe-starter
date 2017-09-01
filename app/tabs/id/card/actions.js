import constants from './constants'
import navconstants from '../constants'
import idactions from '../actions'
import historiesactions from '../../../ucomponents/histories/actions'
import { api } from '../../../ucomponents/index'


export default {

    navigateTo: ({route, ...params}) => {
        return (dispatch) => {
            switch (route){
                case navconstants.GOTO_HISTORIES:
                    dispatch(idactions.gotoHistories(params));
                    break;
                default:
                    break;
            }
        }
    },

    load: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.LOAD_CARD,
				payload: params,
			})
		}
	},

	refresh: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.REFRESH_CARD,
				payload: params,
			})
		}
	},

    historiesactions: ({ action, ...params}) => {
        historiesactions(constants)[action](params)
    },

    // historiesactionsd: (params) => historiesactions(constants)[action](params)


}
