import React from 'react'

function Todo({todo}) {
  return (
    <div>{todo.id}  {todo.name}</div>
  )
}

export default Todo