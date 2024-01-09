// Write your code here
import {v4 as uniqueId} from 'uuid'
import {Component} from 'react'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
// const myItems = [
//   {
//     id: uniqueId(),
//     name: 'Aman',
//     comment: 'your are great',
//     isLiked: true,
//   },
// ]

class Comments extends Component {
  state = {
    initialName: '',
    initialComment: '',
    myArray: [],
  }

  handleSubmit = event => {
    event.preventDefault()
    const {initialName, initialComment} = this.state
    const randomNumber = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const newComment = {
      id: uniqueId(),
      name: initialName,
      comment: initialComment,
      backgroundC: initialContainerBackgroundClassNames[randomNumber],
      isLiked: false,
    }

    this.setState(prevState => ({
      myArray: [...prevState.myArray, newComment],
      initialName: '',
      initialComment: '',
    }))
  }

  handleDelete = id => {
    const {myArray} = this.state
    const filteredArray = myArray.filter(each => each.id !== id)

    this.setState({myArray: filteredArray})
  }

  handlemyClick = id => {
    // const {myArray} = this.state
    this.setState(prevState => ({
      myArray: prevState.myArray.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  handleName = event => this.setState({initialName: event.target.value})

  handleComment = event => this.setState({initialComment: event.target.value})

  render() {
    const {initialName, initialComment, myArray} = this.state
    console.log(myArray)

    return (
      <>
        <div className="header">
          <div className="leftSide">
            <h1 className="main_heading">Comments</h1>
            <form onSubmit={this.handleSubmit} className="form_container">
              <p className="main_para_heading">
                Say Something about 4.0 Technologies
              </p>
              <input
                value={initialName}
                onChange={this.handleName}
                type="text"
                placeholder="Your Name"
                className="name_input"
              />
              <textarea
                value={initialComment}
                onChange={this.handleComment}
                type="text"
                placeholder="Your Comment"
                className="comment_input"
                rows={4}
                cols={50}
              />

              <button className="add_btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="comment_icon"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="horizontal_line" />
        <div className="footer">
          <p className="number_comments">
            <span className="number">{myArray.length}</span>Comments
          </p>
          <ul className="list_container">
            {myArray.map(each => (
              <CommentItem
                // backgroundColor={
                //   initialContainerBackgroundClassNames[randomNumber1]
                // }
                handlemyClick={this.handlemyClick}
                handleDelete={this.handleDelete}
                key={each.id}
                eachItem={each}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}
export default Comments
