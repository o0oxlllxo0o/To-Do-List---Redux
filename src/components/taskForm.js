import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux'
import * as actions from '../actions/index.js'
class TaskForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id:'',
      name:'',
      status:true
    }
  }
  componentDidMount(){
    let {taskOnUpdate}=this.props
    if(taskOnUpdate.id!==undefined){
      this.setState({id:taskOnUpdate.id,name:taskOnUpdate.name,status:taskOnUpdate.status})
    }
  }
  componentWillReceiveProps(nextProps){
    let {taskOnUpdate}=nextProps
    //console.log(taskOnUpdate)
    if(taskOnUpdate.id!==undefined){
      this.setState({id:taskOnUpdate.id,name:taskOnUpdate.name,status:taskOnUpdate.status})
    }
    else{
      this.setState({id:'',name:'',status:true})
    }
  }
  closeForm=()=>{
    this.resetData()
    this.props.closeForm()
  }
  resetData=()=>{
    this.setState({
      id:'',
      name:'',
      status:true
    })
    this.props.clearForm()
  }
  onSubmit=(event)=>{
    event.preventDefault()
    //this.resetData() -- se khong chay duoc ham setState boi no can chay noi co uu tien this.state
    this.props.onUpdateOrAddTask(this.state) // Noi duoc chay uu tien bo qua setState
    this.resetData()
  }
  onChange=(event)=>{
    var name=event.target.name
    var value=event.target.value
    if(value==="true"||value==="false"){
      value=value==="true"?true:false
    }
    this.setState({
      [name]:value
    })
    
  }
  
	render(){
    if(!this.props.isDisplayForm) return ''
		return(
		<div className="container border border-warning rounded-2 p-0">
            <div className="alert alert-warning" >
              <span><b>{this.state.id!==''?'Cập nhật công việc':'Thêm công việc'}</b></span>
              <FontAwesomeIcon type="button" className="float-end" icon={["fas","times-circle"]} onClick={this.closeForm}/>
            </div>
            <form className="p-3" onSubmit={this.onSubmit}>
              <div className="mb-3">
                <label htmlFor="Subject" className="form-label"><b>Tên:</b></label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="Subject" 
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  />
              </div>
              <div className="mb-3">
                <label className="mb-2"><b>Trạng thái:</b></label>
                <select  
                  className="form-select" 
                  aria-label="Default select example" 
                  value={this.state.status} 
                  name="status" 
                  id="status"
                  onChange={this.onChange}>
                  <option value={true}>Kích hoạt</option>
                  <option value={false}>Ẩn</option>
                </select>
              </div>
              <div className="text-center" role="group" aria-label="Basic mixed styles example">
                <button type="submit" className="btn btn-warning me-2">Lưu lại</button>
                <button type="reset" className="btn btn-danger" onClick={this.resetData}>Huỷ bỏ</button>
              </div>
            </form>
        </div>
		)
	}
}
const mapStateToProps=(state)=>{
  return {
    isDisplayForm: state.isDisplayForm,
    taskOnUpdate:state.updateData
  }
}
const mapDispactchToProps=(dispactch,props)=>{
  return {
    onUpdateOrAddTask:(task)=>{
      dispactch(actions.UPDATE_OR_ADD_TASK(task))
    },
    closeForm:()=>{
      dispactch(actions.CLOSE_FORM())
    },
    clearForm:()=>{
      dispactch(actions.CLEAR_FORM())
    }
  }
}
export default connect(mapStateToProps,mapDispactchToProps)(TaskForm)