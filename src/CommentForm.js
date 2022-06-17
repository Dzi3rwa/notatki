import React, { useState } from 'react';
import './style.css'
import Comment from './Comment'

function CommentForm(props) {
    const firstState = { status: 'niewysłane', data: "" }
    const [state, setState] = useState(firstState)

    const onChange = (event) => {
        setState({ ...state, data: event.target.value })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (state.data !== "") {
            setState({ ...state, status: "wysłane", data: "" })
            props.function(props.id, state.data)
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} >
                <input type="text" value={state.data} onChange={onChange} className='inputText' />
                <input type="submit" value="send" />
                <Comment status={state.status} data={state.data} />
            </form>
        </div>
    );
}

export default CommentForm;