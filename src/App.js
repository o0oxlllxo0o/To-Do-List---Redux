
import React from 'react'
import './App.css'
//import font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons' //Thu vien fontAwesome

import TaskForm from './components/taskForm.js'
import Control from './components/control.js'
import AddSubject from './components/AddSubject'
import ListSubject from './components/listSubject.js'
//import tranning from './tranning/traningRedux.js' Test redux
import {connect} from 'react-redux'
library.add(fas)
//    

class App extends React.Component{
  render(){
    var {isDisplayForm}=this.props
    return (
    <div className="App container mt-3">
      <h2 className="p-auto mb-5 text-center border-bottom pb-3">Quản lý công việc</h2>
      <div className="row">
        <div className={isDisplayForm===true?'col-4':''}>
          {/*Form Add Subject*/}
          <TaskForm />
        </div>
        <div className={isDisplayForm===true?'col-8':'col'}>
          {/*Open Form Add Subject*/}
          <AddSubject  />
          <Control />         
          <div className="row listSubject">
            <ListSubject />
          </div>
        </div>
      </div>
    </div>
    );
  }
  
}
const mapStateToProps=(state)=>{
  return {
    isDisplayForm:state.isDisplayForm
  }
}
export default connect(mapStateToProps)(App);
