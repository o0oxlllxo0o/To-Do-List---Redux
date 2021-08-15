import * as TYPE from '../constants/types.js'
var initialState =null
const myReducer=(state=initialState,action)=>{
	switch(action.type){
		case TYPE.SORT:{
			console.log(action)
			return action.detail
		}
	}
	return state
}
export default myReducer