import React, { Component } from 'react'
import { Comment, CreateComment } from '../presentation'
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

  submitComment(comment){
    console.log('submitting from container: '+JSON.stringify(comment))
    let updatedList = Object.assign([], this.state.list)

    APImanager.post('api/comment', comment, (err, response) => {
      if (err){
        alert('ERROR '+err)
        return
      }
      console.log("COmment CREATEDS "+JSON.stringify(response))
      updatedList.push(comment)
      this.setState({
        list: updatedList
      })
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
        <CreateComment onCreate={this.submitComment.bind(this)}/>
      </div>
    )
  }
}

export default Comments
