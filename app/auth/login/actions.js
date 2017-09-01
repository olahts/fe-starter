import constants from './constants'
import navconstants from '../constants'
import authactions from '../actions'
import api from '../../ucomponents/api'


export default {

	login: (params) => {
		return (dispatch) => {
			dispatch({type: constants.LOGIN_SUCCESS, payload: '45564577575'});
			dispatch(authactions.gotoTabs(params));
			// return api.post('/login', params)
			// 	.then(user => {
			// 		dispatch({type: constants.LOGIN_SUCCESS, payload: user})
      //     // dispatch(appnavactions.gotoHome(user))
      //   })
			// 	.catch(err => dispatch({type: constants.LOGIN_FAIL, payload: err}) )
		}
	},

	navigateTo: ({route, params}) => {
        return (dispatch) => {
            switch (route){
                case navconstants.GOTO_SIGNUP:
                    dispatch(authactions.gotoSignup(params));
                    break;
                default:
                    break;
            }
        }
    },

}
