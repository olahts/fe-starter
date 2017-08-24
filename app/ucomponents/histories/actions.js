import constants from './constants'
import idactions from '../../tabs/id/actions'
export default {

	load: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.LOAD_HISTORIES,
				payload: params,
			})
		}
	},

	refresh: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.REFRESH_HISTORIES,
				payload: params,
			})
		}
	},

    navigate: ({route, params}) => {
        return (dispatch) => {
            switch (route){
                case 'Back':
                    dispatch(idactions.gotoBack(params));
                    break;
                default:
                    break;
            }
        }
    },

}
