import React from 'react'
import Subject from './subject'
import {connect} from 'react-redux'
class ListSubject extends React.Component{
  constructor(props){
    super(props)
    this.state={
      filterName:'',
      filterStatus:"0",
    }
  }
  deleteData=(element)=>{
    this.props.deleteData(element)
  }
  updateData=(element)=>{
    this.props.updateData(element)
  }
  sort(arr){
    let sortWith=this.props.sortData
    if(sortWith){
      console.log(sortWith)
      if(sortWith.name==="name"){
        if(sortWith.status==="1"){
          arr.sort(function(a,b){
            if(a.name>b.name) return 1
            else if(a.name<b.name) return -1
           return 0
          })
        }
        else{
          arr.sort(function(a,b){
            if(a.name<b.name) return 1
            else if(a.name>b.name) return -1
           return 0
          })
        } 
      }
        else{
          if(sortWith.status==="1"){
            arr.sort(function(a,b){
              if(a.status>b.status) return -1
              else if(a.status<b.status) return 1
             return 0
            })
          }
        else{
          arr.sort(function(a,b){
            if(a.status<b.status) return -1
            else if(a.name>b.name) return 1
           return 0
          })
        }
      }
    }
    
  }
  search(arr){
    let keyword=this.props.searchData
    if(keyword!==''){
      console.log(this.props.searchData)
      arr=arr.filter(function(value){
        let position=value.name.toUpperCase().search(keyword.toUpperCase())
        return position!==-1
      })
    }
    return arr
  }
  filter(){
    let {filterName,filterStatus}=this.state
    let arr=this.props.listSubject.filter(function(value){
      if(filterName!==''){
        let position=value.name.toUpperCase().search(filterName.toUpperCase())
        if(filterStatus!=="0"){
          let status=filterStatus==="1"?true:false
          return position!==-1&&status===value.status
        }
        return position!==-1
      }
      if(filterName===''){
        if(filterStatus!=="0"){
          let status=filterStatus==="1"?true:false
          return status===value.status
        }
      }
      return true
    })
    return arr
  }
  renderSubject(){
    
    let filterSubject=this.filter() //filter subject
    
    filterSubject=this.search(filterSubject) //Search keyword
   
    this.sort(filterSubject)  //sort
    
    //render
    let subject= filterSubject.map((value,index)=>{
      return (<Subject
               // updateStatus={this.updateStatus}
               updateData={this.updateData}
               deleteData={this.deleteData} 
               id={value.id} 
               key={value.id} 
               stt={index} 
               name={value.name} 
               status={value.status}/>)
    })
    return subject
  }
  searchData=(event)=>{
    let {name,value}=event.target
    this.setState({[name]:value})
  }
	render(){
    //console.log(this.props.listSubject)
		return(
			<table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Tên</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Nội dung</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-active">
                  <th scope="row"></th>
                  <td >
                    <input 
                      type="text" 
                      className="form-control" 
                      id="SearchTable" 
                      name="filterName"
                      value={this.state.filterName}
                      onChange={this.searchData}/>
                    </td>
                  <td>
                    <select  value={this.state.filterStatus} className="form-select" name="filterStatus" onChange={this.searchData}>
                      <option value="1">Kích hoạt</option>
                      <option value="-1">Ẩn</option>
                      <option value="0">Tất cả</option>
                    </select>
                    </td>
                  <td></td>
                </tr>
                {/*Subject*/}
                {this.renderSubject()}
              </tbody>
            </table>
		)
	}
}
const mapStateToProps= (state)=>{
  return {
    listSubject:state.tasks,
    searchData:state.search,
    sortData:state.sort
  }
}
export default connect(mapStateToProps,null)(ListSubject)