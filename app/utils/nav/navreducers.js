import { NavigationActions } from 'react-navigation';
import Navigator from './Navigator'
import constants from './constants'

const initialAction = Navigator.router.getActionForPathAndParams('auth');
const initialState = Navigator.router.getStateForAction(initialAction);

export default (state = initialState, { type, payload }) => {

  	let nextState = Object.assign({}, state);

  	switch (type){
    case constants.LOGOUT_SUCCESS:
      nextState = initialState
			break;
		case constants.GOTO_AUTH:
			nextState = Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'auth', params: payload }), state);
			break;
		case constants.GOTO_TABS:
			nextState = Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'tabs', params: payload }), state);
			break;
		default:
      nextState = initialState
			break;
	}

  	return nextState;
}
