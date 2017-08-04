import constants from './constants'

var initialState = {
	loginSuccess: false,
	username: '',	
	error: '',
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);

	switch (action.type){
		case constants.LOGIN_SUCCESS:
			newState = action.payload
			break;
		case constants.LOGIN_FAIL:
			newState.error = action.payload
			break;
		case constants.LOGOUT:
			break;
		case constants.SIGNUP_SUCCESS:
			break;
		case constants.SIGNUP_FAIL:
			break;
		default: 
			break;
	}

	return newState ;
}

