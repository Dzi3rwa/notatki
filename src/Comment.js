import React from 'react';

function Comment(props) {
    return (
        <div>
            <h3>status: {props.status}</h3>
            <h3>data: {props.data}</h3>
        </div>
    );
}

export default Comment;