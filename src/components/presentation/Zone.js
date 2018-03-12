import React, { Component } from 'react'
import styles from '../containers/styles.js'

class Zone extends Component{
  render(){
    const style = styles.zone
    return(
      <li>
        <div style={style.container}>
          <h2 style={style.header}>
            <a style={style.link} href='#'>{this.props.currentZone.name}</a>
          </h2>
          <span>{this.props.currentZone.zipCodes}</span><br />
          <span>{this.props.currentZone.comments} comments</span>
        </div>
      </li>
    )
  }
}
export default Zone
