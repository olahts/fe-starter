import api from '../api'
import constants from './constants'
import navactions from '../../auth/actions'
// import appnavactions from '../../znav/nav/actions'

export default {

	signup: (params) => {
		return (dispatch) => {
			return api.post('/signup', params)
				.then(user => {
					dispatch({type: constants.SIGNUP_SUCCESS, payload: user})
          // dispatch(appnavactions.gotoHome(user))
        })
				.catch(err => dispatch({type: constants.SIGNUP_FAIL, payload: err}) )
		}
	},

	gotoLogin: (params) => {
		return (dispatch) => {
			dispatch(navactions.gotoLogin(params))
		}
	},

}
