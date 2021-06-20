
import React from 'react'
import './Post.css'
// import { db } from '../../firebase'
// import firebase from 'firebase'
// import { useDispatch } from 'react-redux'
import Avatar from "@material-ui/core/Avatar"

const Post = ({ postId, user, imageURL, userName, caption }) => {

    // const dispatch = useDispatch();

    

    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    alt="JosiahJames"
                    src="/static/images/avatar/1/jpg"
                />
                <h3>{userName}</h3>
            </div>
            {/* header => avatar + username */}

            <img src={imageURL} alt="postImage" className="post__image" />
         

            <h4 className="post__text"><strong>{userName}: </strong> {caption}</h4>

            {/* <div className="post__comments">
                {comments.map((comment) => (
                    <p>
                        <strong>{comment.username}</strong> {comment.text}
                    </p>
                ))}
            </div> */}
        </div>
        // {user && (
        //     <form className="post__commentBox">
        //         <input 
        //             className="post__input"
        //             type="text"
        //             placeholder="Add a comment..."
        //             value={comment}
        //             onChange={(event) => setComment(event.target.value)}
        //         />
        //         <button
        //             className="post__button"
        //             disabled={!comment}
        //             type="submit"
        //             onClick={postComment}
        //         >
        //             Post
        //         </button>
        //     </form>
        // )}
    )
}

export default Post
