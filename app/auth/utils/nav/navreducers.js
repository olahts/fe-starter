import { NavigationActions } from 'react-navigation';
import Navigator from './Navigator'
import constants from './constants'

const initialAction = Navigator.router.getActionForPathAndParams('login');
const initialState = Navigator.router.getStateForAction(initialAction);

export default (state = initialState, action) => {

  	let nextState = Object.assign({}, state);

  	switch (action.type){
		case constants.GOTO_LOGIN:
			nextState = initialState
			break;
		case constants.GOTO_SIGNUP:
			nextState = Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'signup' }), state);
			break;
		default:
      nextState = initialState
			break;
	}

  	return nextState;
}
