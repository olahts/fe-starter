import api from '../../utils/api'
import constants from './constants'
import navactions from '../utils/nav/actions'
import appnavactions from '../../utils/nav/actions'

export default {

	login: (params) => {
		return (dispatch) => {
			return api.post('/login', params)
				.then(user => {
					dispatch({type: constants.LOGIN_SUCCESS, payload: user})
          dispatch(appnavactions.gotoHome(user))
        })
				.catch(err => dispatch({type: constants.LOGIN_FAIL, payload: err}) )
		}
	},

	gotoSignup: (params) => {
		return (dispatch) => {
			dispatch(navactions.gotoSignup(params))
		}
	},

}
