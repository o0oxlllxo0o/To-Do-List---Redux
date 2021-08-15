import * as TYPE from '../constants/types.js'
var initialState = false
const myReducer = function (state= initialState, action) {
	switch(action.type){
		case TYPE.OPEN_FORM:{
			return true
		}
		case TYPE.CLOSE_FORM:{
			return false
		}
	}
	return state
}
export default myReducer