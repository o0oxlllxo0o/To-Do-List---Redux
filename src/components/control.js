import React from 'react'
import Sort from './sort.js'
import Search from './search.js'

class Control extends React.Component{
	search=(element)=>{
		this.props.search(element)
	}
	sort=(element)=>{
		this.props.sort(element)
	}
	render(){
		return(
		<div className="row">
            <Search search={this.search}/>
            <Sort sort={this.sort}/>
        </div>
		)
	}
}
export default Control