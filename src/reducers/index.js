import {combineReducers} from 'redux'
import tasks from './tasks.js'
import isDisplayForm from './isDisplayForm.js'
import updateData from './updateData.js'
import search from './search.js'
import sort from './sort.js'
const myReducer = combineReducers({tasks, isDisplayForm,updateData, search, sort}) //tasks:tasks isDisplayForm: isDisplayForm
export default myReducer