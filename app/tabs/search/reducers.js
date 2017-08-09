import constants from './constants'

var initialState = {
	feeds: [{
			id: '',
			name: '',
			title: '',
			image: '',
	}]
}

export default (state = initialState, { type , payload }) => {
	let newState = Object.assign({}, state);

	switch (type){
		case constants.LOAD_SEARCH:
			newState = payload
			break;
		case constants.REFRESH_SEARCH:
			newState = payload
			break;
		default:
			newState = initialState
			break;
	}

	return newState ;
}
