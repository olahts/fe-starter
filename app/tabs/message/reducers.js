import constants from './constants'

var initialState = {
	messages: [{
			id: '',
			name: '',
			title: '',
			image: '',
	}]
}

export default (state = initialState, { type , payload }) => {
	let newState = Object.assign({}, state);

	switch (type){
		case constants.LOAD_MESSAGE:
			newState = payload
			break;
		case constants.REFRESH_MESSAGE:
			newState = payload
			break;
		default:
			newState = initialState
			break;
	}

	return newState ;
}
