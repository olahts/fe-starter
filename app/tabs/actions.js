import constants from './constants'


export default {

	goBack: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GO_BACK,
				payload: params,
			})
		}
	},

	gotoHome: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_HOME,
				payload: params,
			})
		}
	},

	gotoId: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_ID,
				payload: params,
			})
		}
	},

	gotoMessage: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_MESSAGE,
				payload: params,
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
