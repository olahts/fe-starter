import superagent from 'superagent'
import testdata from './testdata'

export default {

	get: (url, params) => new Promise( (resolve, reject) => {
		superagent
		.get(url)
		.query(params)
		.set('Accept', 'application/json')
		.end((err, res) => err ? reject('API failed') :
			resolve (testdata.user) )
	}),

    post: (url, params, callback) => {
		superagent
		   .post(url)
		   .send(params)
		   .set('Accept', 'application/json')
		   .end(function(err, response){
		     	if(err){
					callback(err, null)
					return
				}else{
					callback(null, response.body)
				}
		   })
	},

	put: () => {

	},

	delete: () => {

	},

    getMock: (url, params) => new Promise( (resolve, reject) => {
        superagent
            .get(url)
            .query(params)
            .set('Accept', 'application/json')
            .end((err, res) => null ? reject ('API failed') :
                resolve (testdata[params.seed]) )
    }),

}