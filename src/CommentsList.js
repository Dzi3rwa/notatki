import React from 'react';
import './style.css'
import CommentForm from './CommentForm';


function CommentsList(props) {
    const comments = props.comments.map(e => {
        return (
            <div className='comment'>
                {e.id}, {e.text}, {e.date}
            </div>
        )
    })
    return (
        <div className='commentsList'>
            {comments}
            <div className='form'>
                <CommentForm function={props.function} id={props.id} />
            </div>
        </div>
    );
}

export default CommentsList;