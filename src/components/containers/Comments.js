import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'
class Comments extends Component{
  constructor(){
    super()
    this.state = {
      list: [
        {body: 'Comment 1', username: 'user1', timestamp: '10:00AM'},
        {body: 'Comment 2', username: 'user2', timestamp: '10:00AM'},
        {body: 'Comment 3', username: 'user3', timestamp: '10:00AM'},
        {body: 'Comment 4', username: 'user4', timestamp: '10:00AM'}
      ]
    }
  }

  submitComment(){
    console.log("submitComment")
  }

  updateUsername(event){
    console.log('updating '+event.target.value)
  }

  render(){
    const universal = styles.universal
    const listItems = this.state.list.map((comment, i) => {
      return (<Comment id={i} currentComment={comment}/>)
    })
    return(
      <div>
        <h2>Zone 1 Comments</h2>
        <ol>
          {listItems}
        </ol>
        <input style={universal.marginTop} className="form-control" type="text" name="comment" placeholder="comment"/>
        <input style={universal.marginTop} onChange={this.updateUsername.bind(this)} className="form-control" type="text" name="username" placeholder="username"/>
        <button style={universal.marginTop} onClick={this.submitComment.bind(this)} className="btn btn-info">Submit</button>
      </div>
    )
  }
}

export default Comments
