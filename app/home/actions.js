import constants from './constants'
import { api, validate } from '../utils'

export default {

	load: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.LOAD_PROFILE,
				payload: params,
			})
		}
	},

	refresh: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.REFRESH_PROFILE,
				payload: '',
			})
		}
	},

	edit: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.EDIT_PROFILE,
				payload: '',
			})
		}
	},

	save: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.SAVE_PROFILE,
				payload: '',
			})
		}
	},

}
