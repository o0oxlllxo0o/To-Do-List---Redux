import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as actions from '../actions/index.js'
import {connect} from 'react-redux'
class Search extends React.Component{
  constructor(props){
    super(props)
    this.state={
      keyword:''
    }
  }
  onChange=(event)=>{
    this.setState({keyword:event.target.value})
  }
  search=()=>{
    this.props.Search(this.state.keyword)
  }
	render(){
		return(
            <div className="col-6">
              <div className="search input-group mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Nhập từ khoá..." 
                  value={this.state.keyword}
                  onChange={this.onChange}/>
                <button className="btn btn-primary" type="button" onClick={this.search} id="button-addon2">
                  <FontAwesomeIcon icon={["fas","search"]} className="me-2"/>
                  <b>Tìm</b>
                </button>
              </div>
            </div>
		)
	}
}
const mapStateToProps= (state)=>{
  return {}
}
const mapDispactchToProps=(dispactch,props)=>{
  return {
    Search: (text)=>{
      dispactch(actions.SEARCH(text))
    }
  }
}
export default connect(mapStateToProps,mapDispactchToProps)(Search)