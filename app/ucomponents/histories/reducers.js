import constants from './constants'

var initialState = {
	number: '',
	title: '',
	firstname: '',
	lastname: '',
	middlename: '',
	address: '',
	mobile: '',
	dob: '',
	gender: '',
	image: '',
	category: '',
	status: '',
	specialization: 'Gyna',
	history: '',
};

export default (state = initialState, {type, payload}) => {
	let newState = Object.assign({}, state);

	switch (type){
		case constants.LOAD_HISTORIES:
			newState = payload;
			break;
		case constants.REFRESH_HISTORIES:
			newState = payload;
			break;
		default:
			newState = initialState;
			break;
	}

	return newState ;
}
