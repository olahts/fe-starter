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

	gotoFeeds: (params) => {
		return (dispatch) => {
			dispatch({
				type: constants.GOTO_FEEDS,
				payload: { origin: constants.ORIGIN, ...params},
			})
		}
	},

    gotoFeed: (params) => {
        return (dispatch) => {
            dispatch({
                type: constants.GOTO_FEED,
                payload: { origin: constants.ORIGIN, ...params},
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
