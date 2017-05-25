import constants from './constants'
import { api, validate } from '../../utils'
import testdata from '../../utils/testdata'


export default {

	goBack: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GO_BACK,
				payload: testdata,
			})
		} 
	},

	gotoLogin: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_LOGIN,
				payload: testdata,
			})
		}  
	},

	gotoId: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_ID,
				payload: 'params',
			})
		}
	},

	gotoRequest: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_REQUEST,
				payload: testdata,
			})
		} 
	},

	gotoProfile: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_PROFILE,
				payload: testdata,
			})
		} 
	},

	gotoMessages: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_MESSAGES,
				payload: testdata,
			})
		} 
	},

	gotoSearch: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_SEARCH,
				payload: testdata,
			})
		} 
	},

}