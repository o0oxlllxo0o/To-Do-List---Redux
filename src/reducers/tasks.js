import * as TYPE from '../constants/types.js'
var initialState=localStorage.task!==undefined?JSON.parse(localStorage.task):[]
var generateID=()=>{
    function s4(){
      return Math.floor((1+Math.random())*0x10000).toString(16).substring(1)
    }
    return s4()+s4()+s4()+s4()
}
var myReducer = (state=initialState,action)=>{
	switch(action.type){
		case TYPE.LIST_ALL:{
			return state
		}
		case TYPE.UPDATE_OR_ADD_TASK: {
			let {id,name,status}=action.task
			let newSubject={id,name,status}
			if(!id){
				newSubject.id=generateID()
				state.push(newSubject)				
			}
			else{
				let index =state.findIndex(function(value){
					return value.id===id
				})
				state[index]=newSubject
			}			
			localStorage.setItem('task',JSON.stringify(state))
			return [...state]
		}
		case TYPE.UPDATE_STATUS:{
			let index = state.findIndex(function(value){
      	return value.id===action.id
    	})
	  	if(index!==-1){
	    	state[index].status=!state[index].status
	  	}	
	  	localStorage.setItem('task',JSON.stringify(state))
			return [...state]
		}
		case TYPE.DELETE_SUBJECT:{
			state=state.filter((value)=>{
				return value.id!==action.id
			})
			localStorage.setItem('task',JSON.stringify(state))
			return [...state]
		}
	}
	return state
}

export default myReducer
