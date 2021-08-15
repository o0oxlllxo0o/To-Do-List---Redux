import * as TYPE from '../constants/types.js'
var initialState = {}
const myReducer =(state=initialState,action)=>{
	switch (action.type){
		case TYPE.UPDATE_OR_ADD_TASK: {
			return action.task
		}
		case TYPE.CLEAR_FORM:{
			return {}
		}
	}
	return state
}
export default myReducer