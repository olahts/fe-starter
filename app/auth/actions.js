import constants from './constants'
import api from '../utils/api'
import validate from '../utils/validate'
import navaction from '../utils/nav/actions'
import idaction from '../id/actions'
import homeaction from '../home/actions'
import messageaction from '../message/actions'

export default {

	login: (params) => {
		return (dispatch) => {
			return validate.username(params)
				.then(res => validate.password(params) )
				.then(res => api.get('/user', params) )
				.then(user => {
					dispatch(idaction.load({ ...user.id, messages: user.messages, search: user.search }) )
					dispatch(homeaction.load({...user.health.id, teams: {...user.teams.id, members: user.teams.members, services: user.teams.services } }) )
					dispatch(messageaction.load(user.health.messages) )
					dispatch(navaction.gotoId(params))
				})
				.catch(err => dispatch({type: constants.LOGIN_FAIL, payload: err}) )
		}
	},

	logout: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.LOGIN,
				payload: '',
			})
		}
	},

	signup: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.SIGNUP_SUCCESS,
				payload: '',
			})
			navactions.gotoLogin(params)
		}
	},

}
