import constants from './constants'
import { api, validate } from '../utils'

export default {

	load: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.LOAD_REQUEST,
				payload: params,
			})
		}
	},

	refresh: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.REFRESH_REQUEST,
				payload: '',
			})
		}
	},

	accept: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.EDIT_REQUEST,
				payload: '',
			})
		}
	},

	cancel: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.SAVE_REQUEST,
				payload: 'testdata',
			})
		}
	},

	reject: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.SAVE_REQUEST,
				payload: 'testdata',
			})
		}
	},

	submit: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.SAVE_REQUEST,
				payload: 'testdata',
			})
		}
	},

}
