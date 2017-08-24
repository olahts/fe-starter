import constants from './constants'

var initialState = {
  signupSuccess: false,
  user: null,
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);

	switch (action.type){
		case constants.SIGNUP_SUCCESS:
      newState.signupSuccess = true
      newState.user = action.payload
      break;
		case constants.SIGNUP_FAIL:
			newState.signupSuccess = false
      newState.user = action.payload
			break;
		default:
			break;
	}

	return newState ;
}
