import React, { Component } from 'react'
import { Zone, CreateZone } from '../presentation'
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
      selected: 0,
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


  submitZone(zone){
    let updatedList = Object.assign([], this.state.list)
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
      let selected = (i==this.state.selected)
      return (<Zone key={i} isSelected={selected} currentZone={zone}/>)
    })
    return(
      <div>
        <h2>Zones</h2>
        <ol>
          {listItems}
        </ol>
        <CreateZone onCreate={this.submitZone.bind(this)}/>
      </div>
    )
  }
}

export default Zones
