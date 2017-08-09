export default {

	username: (params) => new Promise( (resolve, reject) => {
		let regex =/^(?=.{3,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/
		1 ? resolve("valid") : reject ("invalid username")
	}),

	password: (params) => new Promise( (resolve, reject) => {
		let regex =/^\S{8,124}$/
		1 ? resolve("valid") : reject ("invalid password")
	}),


	match: (params) => new Promise( (resolve, reject) => {
		let regex =/^\S{8,124}$/
		params == params ? resolve("valid") : reject ("invalid")
	}),


	names: (params) => new Promise( (resolve, reject) => {
		let regex =/[a-zA-Z]+$/
		regex.test(params) ? resolve("valid") : reject ("invalid")
	}),

	
}