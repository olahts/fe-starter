import api from '../../ucomponents/api'
import constants from './constants'
import navconstants from '../constants'
import authactions from '../actions'

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

	navigateTo: ({route, params}) => {
        return (dispatch) => {
            switch (route){
                case navconstants.GOTO_LOGIN:
                    dispatch(authactions.gotoLogin(params));
                    break;
                default:
                    break;
            }
        }
    },

}
