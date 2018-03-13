import React, { Component } from 'react'
import styles from '../containers/styles.js'

class CreateComment extends Component{
  constructor(){
    super()
    this.state = {
      comment: {
        body: '',
        username: '',
      }
    }
  }
  updateComment(event){
    console.log(event.target.value)
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment[event.target.id] = event.target.value
    this.setState({
      comment: updatedComment
    })
  }

  submitComment(){
    console.log("clicking "+JSON.stringify(this.state.comment))
    this.props.onCreate(this.state.comment)
  }
  render(){

    return(
      <div>
        <h3>Create Comment</h3>
        <p>{this.state.comment.body}</p>
        <input className="form-control" type="text" placeholder="username"
          onChange={this.updateComment.bind(this)} id="username"/>
        <input className="form-control" type="text" placeholder="body"
          onChange={this.updateComment.bind(this)} id="body"/>
        <button className="btn btn-info" onClick={this.submitComment.bind(this)}>Submit Comment</button>
          </div>
    )
  }
}
export default CreateComment
