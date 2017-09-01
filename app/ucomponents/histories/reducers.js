export default {

    initialState: {
        page: 1,
        seed: 1,
        loading: false,
        refreshing: false,
        data: [],
        error: null,
    },

	switcher: (constants, newState, {type, payload}) => {
        switch (type){
            case constants.LOAD_HISTORIES:
                newState = payload;
                break;
            case constants.REFRESH_HISTORIES:
                newState = payload;
                break;
            default:
                break;
        }
        return newState;
	},
}
