import { NavigationActions } from 'react-navigation';
import Navigator from './Navigator'
import constants from './constants'

const initialAction = Navigator.router.getActionForPathAndParams('card');
const initialState = Navigator.router.getStateForAction(initialAction);

export default (state = initialState, { type, payload} ) => {

  	let nextState = Object.assign({}, state);

    switch (type){
		case constants.GO_BACK:
            nextState = Navigator.router.getStateForAction(NavigationActions.back(), state);
			break;
		case constants.GOTO_CARD:
			nextState = Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'card', params: payload }), state);
			break;
    	case constants.GOTO_HISTORIES:
            nextState = Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'histories', params: payload }), state);
			break;
		default:
      		nextState = state;
			break;
	}

  	return nextState;
}
