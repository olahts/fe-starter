import constants from './constants'
import histories from '../../../ucomponents/histories/reducers'

let initialState = {
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
	histories: histories.initialState,
};

export default (state = initialState, {type, payload}) => {
	let newState = Object.assign({}, state);

	switch (type){
		case constants.LOAD_CARD:
			newState = payload;
			break;
		case constants.REFRESH_CARD:
			newState = payload;
			break;
        default:
            newState = histories.switcher(constants, newState, {type, payload});
			break;
	}



	return newState ;
}
