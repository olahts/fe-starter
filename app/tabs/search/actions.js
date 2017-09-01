import constants from './constants'
import { api, validate } from '../index'

export default {

	load: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.LOAD_SEARCH,
				payload: params,
			})
		}
	},

	refresh: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.REFRESH_SEARCH,
				payload: params,
			})
		}
	},

}
