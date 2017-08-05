import constants from './constants'
import { api, validate } from '../'
import testdata from '../testdata'


export default {

	goBack: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GO_BACK,
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

	gotoMessage: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_REQUEST,
				payload: testdata,
			})
		}
	},

	gotoHome: (params) => {
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
