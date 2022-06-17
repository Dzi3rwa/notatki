import React, { Component } from 'react';
import CommentsList from './CommentsList';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 123,
          thread: "thread 1",
          comments: [
            { id: 1, text: "aaa", date: "1999" },
            { id: 2, text: "bbb", date: "2000" },

          ]
        },
        {
          id: 247,
          thread: "thread 2",
          comments: [
            { id: 5, text: "ddd", date: "1999" },
            { id: 13, text: "eee", date: "2000" },
            { id: 15, text: "fff", date: "2001" }
          ]
        },
        {
          id: 350,
          thread: "thread 3",
          comments: [
            { id: 6, text: "ggg", date: "1999" },
            { id: 7, text: "hhh", date: "2000" },
            { id: 18, text: "iii", date: "2001" },
          ]
        },
      ]
    };
    this.addComment = this.addComment.bind(this)
  }

  addComment(id, newComment) {
    let Comments
    this.state.data.forEach(e => {
      if (id === e.id) {
        Comments = e.comments
        const lastId = Comments[Comments.length - 1].id
        Comments.push({ id: lastId + 1, text: newComment, date: 2000 })
        this.setState({
          comments: Comments
        })
      }
    })
  }

  render() {
    const dane = this.state.data.map(e => {
      return (
        <div>
          <h1>title: {e.thread}, id: {e.id}</h1>
          <CommentsList comments={e.comments} id={e.id} function={this.addComment.bind(this)} />
        </div>
      )
    })

    return (
      <div className='main'>
        {dane}
      </div>
    );
  }
}

export default App;