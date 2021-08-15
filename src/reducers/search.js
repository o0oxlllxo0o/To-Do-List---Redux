import * as TYPE from '../constants/types.js'
var initialState = ""
const myReducer = (state=initialState,action)=>{
	switch(action.type){
		case TYPE.SEARCH:{
			return action.text
		}
	}
	return state
}
export default myReducer