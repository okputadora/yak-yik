import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import styles from './styles'
import { APImanager } from '../../utils'
class Zones extends Component{
  constructor(){
    super()
    this.state = {
      zone: {
        name: '',
        zipCodes: [],
        comments: ''
      },
      list: []
    }
  }

  componentDidMount(){
    APImanager.get('/api/zone', null, (err, response) => {
      if (err){
        alert("ERROR "+err)
        return
      }
      let results = response.results
      let updatedList = Object.assign([], this.state.list)
      results.forEach((zone) => {
        updatedList.push(zone)
      })
      this.setState({
        list: updatedList
      })
    })


  }

  updateZone(event){
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[event.target.id] = event.target.value
    this.setState({
      zone: updatedZone
    })
  }

  submitZone(){
    let newZone = Object.assign({}, this.state.zone)
    // need to process this a bit so it matches the mongoose schema
    newZone['zipCodes'] = newZone.zipCodes.split(',')
    let updatedList = Object.assign([], this.state.list)
    console.log(JSON.stringify(newZone))
    APImanager.post('api/zone', newZone, (err, response) => {
      if (err){
        alert('ERROR '+err)
        return
      }
      console.log("ZONE CREATEDS")
      updatedList.push(newZone)
      this.setState({
        list: updatedList
      })
    })

  }
  render(){
    const universal = styles.universal
    const listItems = this.state.list.map((zone, i) => {
      return (<Zone id={i} currentZone={zone}/>)
    })
    return(
      <div>
        <h2>Zones</h2>
        <ol>
          {listItems}
        </ol>
        <input id='name' type='text' onChange={this.updateZone.bind(this)} placeholder='name'
          style = {universal.marginTop} className='form-control' name='name'/>
        <input id='zipCodes' type='text' onChange={this.updateZone.bind(this)} placeholder='zip codes'
          style = {universal.marginTop} className='form-control' name='zipCode'/>
        <input id='comments' type='text' onChange={this.updateZone.bind(this)} placeholder='comments'
          style = {universal.marginTop} className='form-control' name='numComments'/>
        <button onClick={this.submitZone.bind(this)} style={universal.marginTop} className='btn btn-danger'>Submit Zone</button>
      </div>
    )
  }
}

export default Zones
