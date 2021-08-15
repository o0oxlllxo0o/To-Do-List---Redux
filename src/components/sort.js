import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux'
import * as actions from '../actions/index.js'
class Sort extends React.Component{
  constructor(props){
    super(props)
    this.state={
      by:'',
      status:"1"
    }
  }
  onClick=(name,status)=>{
    let sort={
      name:name,
      status:status
    }
    this.setState({by:name,status:status})
    this.props.Sort(sort)
  }
	render(){
    let {by,status}=this.state
		return(
            <div className="col-6">
              <div className="Sort">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Sắp xếp
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li type="button" onClick={()=>{
                      this.onClick('name',"1")
                    }}>
                      <span className="dropdown-item"> 
                        <FontAwesomeIcon className="me-2" icon={["fas","sort-alpha-down"]}/>
                        Tên A-Z
                        {(by==="name"&&status==="1")?<FontAwesomeIcon className="ms-3" icon={["fas","check"]}/>:''}
                      </span>              
                    </li>
                    <li type="button" onClick={()=>{
                      this.onClick('name',"-1")
                    }}>
                      <span className="dropdown-item"> 
                        <FontAwesomeIcon className="me-2" icon={["fas","sort-alpha-up"]}/>
                        Tên Z-A
                        {(by==="name"&&status==="-1")?<FontAwesomeIcon className="ms-3" icon={["fas","check"]}/>:''}
                      </span>
                    </li>
                    <li><hr className="dropdown-divider"/></li>
                    <li type="button" onClick={()=>{
                      this.onClick('status',"1")
                    }}>
                      <span className="dropdown-item"> 
                        Trạng thái <b>Kích hoạt</b>
                        {(by==="status"&&status==="1")?<FontAwesomeIcon className="ms-3" icon={["fas","check"]}/>:''}
                      </span>
                    </li>
                    <li type="button" onClick={()=>{
                      this.onClick('status',"-1")
                    }}>
                      <span className="dropdown-item">
                        Trạng thái <b>Ẩn</b>
                        {(by==="status"&&status==="-1")?<FontAwesomeIcon className="ms-3" icon={["fas","check"]}/>:''}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
		)
	}
}
const mapStateToProps=(state)=>{
  return {}
}
const mapDispactchToProps =(dispactch,prop)=>{
  return {
    Sort:(detail)=>{
      dispactch(actions.SORT(detail))
    }
  }
}
export default connect(mapStateToProps,mapDispactchToProps)(Sort)