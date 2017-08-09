import constants from './constants'

export default {

	gotoAuth: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_AUTH,
				payload: params,
			})
		}
	},

	goBack: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GO_BACK,
				payload: params,
			})
		}
	},

	gotoTabs: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_TABS,
				payload: params,
			})
		}
	},


}
