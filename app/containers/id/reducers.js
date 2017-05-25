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
	messages: [{
		from: '',
		name: '',
		image: '',
		to: '',
		date: '',
	}],
	search: {
		key: '',
		value: '',
		recent: [{
			key: '',
			value: '',
		}],
		results: [{
			id: '',
			name: '',
			category: '',
			location: '',
		}],
	},
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);

	switch (action.type){
		case constants.LOAD_ID:
			newState = action.payload
			break;
		case constants.REFRESH_ID:
			break;
		default: 
			break;
	}

	return newState ;
}

