import { NavigationActions } from 'react-navigation';
import Navigator from './Navigator'
import constants from './constants'

const initialAction = Navigator.router.getActionForPathAndParams('id');
const initialState = Navigator.router.getStateForAction(initialAction);

export default (state = initialState, action) => {

  	let nextState = Object.assign({}, state);

  	switch (action.type){
		case constants.GO_BACK:
			break;
		case constants.GOTO_HOME:
			nextState = Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'home' }), state);
			break;
    case constants.GOTO_ID:
			nextState = Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'id' }), state);
			break;
		case constants.GOTO_MESSAGE:
			nextState = Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'message' }), state);
			break;
		case constants.GOTO_SEARCH:
			nextState = Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'search' }), state);
			break;
		default:
      		nextState = state;
			break;
	}

  	return nextState;
}
