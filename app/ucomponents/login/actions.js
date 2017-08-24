import api from '../api'
import constants from './constants'
import navactions from '../../auth/actions'
// import appnavactions from '../../znav/nav/actions'

export default {

	login: (params) => {
		return (dispatch) => {
			dispatch({type: constants.LOGIN_SUCCESS, payload: '45564577575'})
			dispatch({type: constants.GOTO_TABS, payload: '45564577575'})
			// return api.post('/login', params)
			// 	.then(user => {
			// 		dispatch({type: constants.LOGIN_SUCCESS, payload: user})
      //     // dispatch(appnavactions.gotoHome(user))
      //   })
			// 	.catch(err => dispatch({type: constants.LOGIN_FAIL, payload: err}) )
		}
	},

	gotoSignup: (params) => {
		return (dispatch) => {
			dispatch(navactions.gotoSignup(params))
		}
	},

}
