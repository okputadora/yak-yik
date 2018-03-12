import React, { Component } from 'react'
import Zone from '../presentation/Zone'
class Zones extends Component{
  constructor(){
    super()
    this.state = {
      list: [
        {name: 'Zone 1', zipCode: '10012', comments:10},
        {name: 'Zone 2', zipCode: '10013', comments:20},
        {name: 'Zone 3', zipCode: '10014', comments:30},
        {name: 'Zone 4', zipCode: '10015', comments:40}
      ]
    }
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
      </div>
    )
  }
}

export default Zones
