import * as TYPE from '../constants/types.js'
export const LIST_ALL=()=>{
	return {
		type:TYPE.LIST_ALL
	}
}
export const UPDATE_OR_ADD_TASK=(task)=>{
	return {
		type: TYPE.UPDATE_OR_ADD_TASK,
		task //task:task
	}
}
export const OPEN_FORM=()=>{
	return{
		type:TYPE.OPEN_FORM
	}	
}
export const CLOSE_FORM=()=>{
	return{
		type:TYPE.CLOSE_FORM
	}	
}
export const UPDATE_STATUS=(id)=>{
	return {
		type:TYPE.UPDATE_STATUS,
		id
	}
}
export const DELETE_SUBJECT=(id)=>{
	return {
		type:TYPE.DELETE_SUBJECT,
		id
	}
}
export const CLEAR_FORM=()=>{
	return {
		type:TYPE.CLEAR_FORM
	}
}
export const SEARCH=(text)=>{
	return{
		type:TYPE.SEARCH,
		text
	}
}
export const SORT=(detail)=>{
	return {
		type:TYPE.SORT,
		detail
	}
}