import constants from './constants'

var initialState = {
	height: '',
	weight: '',
	genotype: '',
	bloodGroup: '',
	nextOfKin: '',
	nextOfKinMobile: '',
	teams: [{
		number: '',
		comapanyName: '',
		mobile: '',
		email: '',
		location: '',
		createdOn: '',
		createdBy: '',
		priviledges: '',
		members: [{
			id: '',
			name: '',
			title: '',				
			image: '',
		}],
		services: [{
			name: '',
			rating: '',
		}],
	}],
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);

	switch (action.type){
		case constants.LOAD_PROFILE:
			newState = action.payload
			break;
		case constants.REFRESH_PROFILE:
			newState = action.payload
			break;
		case constants.EDIT_PROFILE:
			newState = action.payload
			break;
		case constants.SAVE_PROFILE:
			break;
		default: 
			break;
	}

	return newState ;
}

