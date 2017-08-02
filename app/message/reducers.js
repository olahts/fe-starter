import constants from './constants'

var initialState = {
	from: '',
	name: '',
	image: '',
	to: '',
	createdBy: '',
	createdOn: '',
	purpose: '',
	description: '',
	status: '',
	response: '',
	comments: [{
		from: '',
		name: '',
		createdOn: '',
		message: '',
	}],
	list: [{
		from: '',
		name: 'SDD',
		image: '',
		to: '',
		createdBy: '',
		createdOn: '',
		category: '',
		description: '',
		status: '',
		response: '',
		comments: [{
			from: '',
			name: '',
			createdOn: '',
			message: '',
		}],
	}],
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);

	switch (action.type){
		case constants.LOAD_REQUEST:
			newState.list = action.payload
		case constants.REFRESH_REQUEST:
			break;
		case constants.ACCEPT_REQUEST:
			newState = action.payload
			break;
		case constants.CANCEL_REQUEST:
			break;
		case constants.REJECT_REQUEST:
			break;
		case constants.SUBMIT_REQUEST:
			break;
		default: 
			break;
	}

	return newState ;
}

