import constants from './constants'

var initialState = {
  loginSuccess: false,
  user: null,
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);

	switch (action.type){
		case constants.LOGIN_SUCCESS:
      newState.loginSuccess = true
      newState.user = action.payload
      break;
		case constants.LOGIN_FAIL:
			newState.loginSuccess = false
      newState.user = action.payload
			break;
		default:
			break;
	}

	return newState ;
}
