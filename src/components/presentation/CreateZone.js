import React, { Component } from 'react'
import styles from '../containers/styles.js'

class CreateZone extends Component{
  constructor(){
    super()
    this.state = {
      zone: {
        name: '',
        zipCodes: [],
        comments: ''
      }
    }
  }
  updateZone(event){
    console.log(event.target.value)
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[event.target.id] = event.target.value
    this.setState({
      zone: updatedZone
    })
  }

  submitZone(){
    console.log("clicking "+JSON.stringify(this.state.zone))
    let newZone = Object.assign({}, this.state.zone)
    // need to process this a bit so it matches the mongoose schema
    // we've moved the preprocessing for this to ' CreateZone
    // component...the sole responsibility of of the Zones component should be
    // posting and getting data function should be to pass the
    // data off to the api/
    newZone['zipCodes'] = newZone.zipCodes.split(',')
    console.log(JSON.stringify(newZone))
    this.props.onCreate(newZone)
  }
  render(){

    return(
      <div>
        <h3>Create Zone</h3>
        <input className="form-control" type="text" placeholder="name"
          onChange={this.updateZone.bind(this)} id="name"/>
        <input className="form-control" type="text" placeholder="zip codes"
          onChange={this.updateZone.bind(this)} id="zipCodes"/>
        <input className="form-control" type="text" placeholder="comments"
          onChange={this.updateZone.bind(this)} id="comments"/>
        <button className="btn btn-danger" onClick={this.submitZone.bind(this)}>Create Zone</button>
      </div>
    )
  }
}
export default CreateZone
