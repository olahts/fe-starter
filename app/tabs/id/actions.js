import constants from './constants'


export default {

	gotoBack: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GO_BACK,
				payload: params,
			})
		}
	},

	gotoCard: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_CARD,
				payload: params,
			})
		}
	},

    gotoHistories: (params) => {
        return (dispatch) => {
            dispatch({
                type: constants.GOTO_HISTORIES,
                payload: params,
            })
        }
    },




}
