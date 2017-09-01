import { api } from '../'

export default (constants) => ({

	load: (params) => {
        const { user, page } = params;
		const seed = 'histories';
        return (dispatch) => {
            const url = `/${seed}/?user=${user}&page=${page}&results=20`;
            // return api.get(url, { seed, user, page })
            return api.getMock(url, { seed, user, page })
                .then(res => {
                    const payload = { page, seed, loading: false, refreshing: false, data: res, error: null};

                    dispatch({
                        type: constants.LOAD_HISTORIES,
                        payload,
                    })
                } )
                .catch(err => {
                    const payload = { page, seed, loading: false, refreshing: false, data: [], error: err};
                    dispatch({
                        type: constants.LOAD_HISTORIES,
                        payload,
                    })
                })
        }
    },

    refresh: (params) => {
        return (dispatch) => {
            dispatch({
                type: constants.REFRESH_HISTORIES,
                payload: params,
            })
        }
    },

})
