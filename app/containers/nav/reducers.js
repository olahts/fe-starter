import { NavigationActions } from 'react-navigation';
import AppNavigator from './AppNavigator' 
import constants from './constants'

const initialAction = AppNavigator.router.getActionForPathAndParams('auth');
const initialState = AppNavigator.router.getStateForAction(initialAction);

export default (state = initialState, action) => {
  
  	let nextState = Object.assign({}, state);

  	switch (action.type){
		case constants.GO_BACK:
			break;
		case constants.GOTO_LOGIN:
			nextState = initialState
			break;
		case constants.GOTO_ID:
			nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'id' }), state);
			break;
		case constants.GOTO_REQUEST:
			nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'request' }), state);
			break;
		case constants.GOTO_PROFILE:
			nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'profile' }), state);
			break;
		case constants.GOTO_MESSAGES:
			nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'messages' }), state);
			break;
		case constants.GOTO_SEARCH:
			nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'search' }), state);
			break;
		default: 
			break;
	}

  	return nextState;
}

