// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachItem, handleDelete, handlemyClick} = props
  const {id, name, comment, backgroundC, isLiked} = eachItem
  const myImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const islikedColor = isLiked ? 'liked' : ''

  const mydelete = () => {
    handleDelete(id)
  }
  const myClick = () => {
    handlemyClick(id)
  }

  return (
    <li>
      <div className="list_name_container">
        <p className={`nick_name ${backgroundC}`}>{name[0].toUpperCase()}</p>
        <p className="full_name">{name}</p>
        <p className="time">{formatDistanceToNow(new Date())}</p>
      </div>
      <p className="comment_para">{comment}</p>
      <div className="delete_like_container">
        <button onClick={myClick} type="button" className={`like_btn `}>
          <div className="button_container">
            <img className="like_icon" src={myImage} alt="like" />
            <p className={`like_heading ${islikedColor}`}>Like</p>
          </div>
        </button>
        <button
          onClick={mydelete}
          data-testid="delete"
          type="button"
          className="delete_btn"
        >
          <img
            className="delete_icon"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="horizontal_line2" />
    </li>
  )
}

export default CommentItem
