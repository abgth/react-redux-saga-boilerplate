import * as types from 'actions/ActionTypes';

export default function userAccount(state={status:false,showModal:false,message:''},action){
	switch(action.type){
		case types.USER_LOGGED_RECEIVED:{
			return action.user
		}
		case types.LOGOUT_ACCOUNT:{
			return Object.assign({},state,{
				status:false,
				message:'',
				showModal:false,
				userAccount:{}
			})
		}
		case types.REGISTERED_ACCOUNT:{
			return Object.assign({},state,{
				status:false,
				showModal:'login',
				message:'Your account has been successfully created. Please login to continue'
			})
		}
		case types.SHOW_LOGIN_MODAL:{
			console.log(action)
			return Object.assign({},state,{
				showModal:'login',
				message:action.message
			})
		}
		case types.SHOW_REGISTRATION_MODAL:{
			console.log(action)
			return Object.assign({},state,{
				showModal:'registration',
				message:action.message
			})
		}
		case types.CLEAR_MODALS:{
			console.log(action)
			return Object.assign({},state,{
				showModal:'',
				message:''
			})
		}
		default:{
			return state
		}
	}
}
