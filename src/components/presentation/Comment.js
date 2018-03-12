import React, { Component } from 'react'
import styles from '../containers/styles.js'

class Comment extends Component{
  render(){
    const style = styles.comment
    return(
      <li>
        <div style={style.container}>
          <span>{this.props.currentComment.body}</span><br />
          <span>{this.props.currentComment.username} |</span>
          <span> {this.props.currentComment.timestamp}</span>
        </div>
      </li>
    )
  }
}
export default Comment
