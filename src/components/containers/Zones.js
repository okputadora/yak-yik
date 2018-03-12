import React, { Component } from 'react'
import Zone from '../presentation/Zone'
class Zones extends Component{
  constructor(){
    super()
    this.state = {
      zone: {
        name: '',
        zipCode: '',
        comments: ''
      },
      list: [
        {name: 'Zone 1', zipCode: '10012', comments:10},
        {name: 'Zone 2', zipCode: '10013', comments:20},
        {name: 'Zone 3', zipCode: '10014', comments:30},
        {name: 'Zone 4', zipCode: '10015', comments:40}
      ]
    }
  }
  updateZone(event){
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[event.target.id] = event.target.value
    this.setState({
      zone: updatedZone
    })
  }

  submitZone(){
    let updatedList = Object.assign([], this.state.list)
    let newZone = Object.assign([], this.state.zone)
    updatedList.push(newZone)
    this.setState({
      list: updatedList
    })
  }
  render(){

    const listItems = this.state.list.map((zone, i) => {
      return (<Zone id={i} currentZone={zone}/>)
    })
    return(
      <div>
        <ol>
          {listItems}
        </ol>
        <input id='name' type='text' onChange={this.updateZone.bind(this)} placeholder='name' className='form-control' name='name'/>
        <input id='zipCode' type='text' onChange={this.updateZone.bind(this)} placeholder='zip codes' className='form-control' name='zipCode'/>
        <input id='numComments' type='text' onChange={this.updateZone.bind(this)} placeholder='comments' className='form-control' name='numComments'/>
        <button onClick={this.submitZone.bind(this)} className='btn btn-info'>Submit Zone</button>
          </div>
          )
          }
          }

export default Zones
