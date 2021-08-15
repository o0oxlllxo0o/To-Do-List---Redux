import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux'
import * as actions from '../actions/index.js'
class AddSubject extends React.Component{

	openForm=()=>{
		this.props.openForm()
		this.props.clearForm()
	}
	render(){
		return(
		    <button type="button" className="btn btn-primary mb-2" onClick={this.openForm}>
                <FontAwesomeIcon className="me-2"icon={["fas","plus-circle"]}/>
                <b>Thêm công việc</b>
          	</button>
		)
	}
}
const mapStateToProps = (state)=>{
	return {}
}
const mapDispactchToProps = (dispactch,props)=>{
	return {
		openForm:()=>{ 
			dispactch(actions.OPEN_FORM())
		},
		clearForm:()=>{
	      dispactch(actions.CLEAR_FORM())
	    }
	}
}
export default connect(mapStateToProps,mapDispactchToProps)(AddSubject)