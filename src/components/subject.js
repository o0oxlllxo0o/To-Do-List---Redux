import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index.js'
class Subject extends React.Component{

  updateStatus=()=>{
    this.props.UPDATE_STATUS(this.props.id)
  }
  deleteSubject=()=>{
    this.props.DELETE_SUBJECT(this.props.id)
  }
  updateData=()=>{
    this.props.OPEN_FORM()
    let {id,name,status}=this.props
    let Subject={id,name,status}
    this.props.UPDATE_OR_ADD_TASK(Subject)
  }
	render(){
		return(
      <tr>
        <th scope="row" className="p-3">{this.props.stt+1}</th>
        <td className="p-3">{this.props.name}</td>
        <td className="text-center p-3">
          <span 
            type="button" 
            onClick={this.updateStatus} 
            className={this.props.status===true?'badge bg-success':'badge bg-secondary'}>
            {this.props.status===true?'Kích hoạt':'Ẩn'}
          </span>
        </td>
        <td>
          <div className="text-center" role="group" aria-label="Basic mixed styles example">
            <button type="submit" className="btn btn-warning me-2" onClick={this.updateData}>Sửa</button>
            <button type="reset" className="btn btn-danger" onClick={this.deleteSubject}>Xoá</button>
          </div>
        </td>
      </tr>
		)
	}
}
const mapStateToProps=(state)=>{
  return {}
}
const mapDispactchToProps=(dispatch,props)=>{
  return {
    UPDATE_STATUS: (id)=>{
      dispatch(actions.UPDATE_STATUS(id))
    },
    DELETE_SUBJECT:(id)=>{
      dispatch(actions.DELETE_SUBJECT(id))
    },
    UPDATE_OR_ADD_TASK:(task)=>{
      dispatch(actions.UPDATE_OR_ADD_TASK(task))
    },
    OPEN_FORM:()=>{ 
      dispatch(actions.OPEN_FORM())
    }
  }
}
export default connect(mapStateToProps,mapDispactchToProps)(Subject)