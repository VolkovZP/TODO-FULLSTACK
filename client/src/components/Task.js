import React from 'react'

function Task(props) {
    const { body, isDone, id, deadline, deleteTaskRequest } = props
    return (
        <article>
            <h2>ID {id}</h2>
            <h3>{body}</h3>
            <p>
                isDone : <input type='checkbox' />
            </p>
            <p>{deadline}</p>
            <button onClick={() => deleteTaskRequest(id)}>X</button>
        </article>
    )
}

export default Task