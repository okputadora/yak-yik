import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'
import { APImanager } from '../../utils'
class Comments extends Component{
  constructor(){
    super()
    this.state = {
      comment: {
        username: '',
        body: '',
      },
      list: []
    }
  }

  componentDidMount(){
    APImanager.get('/api/comment', null, (err, response) => {
      if (err){
        alert("ERROR "+err)
        return
      }
      let results = response.results
      let updatedList = Object.assign([], this.state.list)
      results.forEach((comment) => {
        updatedList.push(comment)
      })
      this.setState({
        list: updatedList
      })
    })


  }

  submitComment(){
    let updatedList = Object.assign([], this.state.list)
    let newComment = Object.assign({}, this.state.comment)
    APImanager.post('api/comment', newComment, (err, response) => {
      if (err){
        alert('ERROR '+err)
        return
      }
      console.log("COmment CREATEDS "+JSON.stringify(response))
      updatedList.push(newComment)
      this.setState({
        list: updatedList
      })
    })

  }
  updateBody(event){
    console.log('updating '+event.target.value)
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = event.target.value
    this.setState({
      comment: updatedComment
    })
  }
  updateUsername(event){
    console.log('updating '+event.target.value)
    // don't mutate state
    // WRONGGGGG this.state.comment['username'] = event.target.value
    // copy it instead
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['username'] = event.target.value
    this.setState({
      comment: updatedComment
    })
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
        <input style={universal.marginTop} onChange={this.updateBody.bind(this)}
        className="form-control" type="text" name="comment" placeholder="comment"/>
        <input style={universal.marginTop} onChange={this.updateUsername.bind(this)}
        className="form-control" type="text" name="username" placeholder="username"/>
        <button style={universal.marginTop} onClick={this.submitComment.bind(this)}
        className="btn btn-info">Submit Comment</button>
      </div>
    )
  }
}

export default Comments
