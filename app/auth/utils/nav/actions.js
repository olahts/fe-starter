import constants from './constants'


export default {

	gotoLogin: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_LOGIN,
				payload: params,
			})
		}
	},

	gotoSignup: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_SIGNUP,
				payload: params,
			})
		}
	},

}
