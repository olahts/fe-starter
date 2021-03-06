import constants from './constants'

let initialState = {
    page: 1,
    seed: 1,
    loading: false,
    refreshing: false,
    data: [],
    error: null,
};

export default (state = initialState, {type, payload}) => {
	let newState = Object.assign({}, state);

	switch (type){
		case constants.LOAD_FEEDS:
			newState = payload;
			break;
		case constants.REFRESH_FEEDS:
			newState = payload;
			break;
		default:
			newState = initialState;
			break;
	}

	return newState ;
}
