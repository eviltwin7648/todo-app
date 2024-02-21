import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

const App = () => {

  const [todos, settodos] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [])
   const todoNameRef = useRef()
   
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
  
function toggleTodo(id){
  const newTodos = [...todos ]
  const todo =newTodos.find(todo =>todo.id === id)
  todo.completed =!todo.completed
  settodos(newTodos)
}


function handleAddTodo(e){
 const name = todoNameRef.current.value
 if(name === "") return 
settodos(prevTodo=>{
  return [...prevTodo, {id:uuidv4(), name:name, completed: false}]
})
 todoNameRef.current.value = null

}

function handleClearTodo(){
const newTodos = todos.filter(todo=> !todo.completed)
settodos(newTodos)

}

  return (<div>

   <TodoList  todos={todos} toggleTodo={toggleTodo}/>
   <input ref={todoNameRef} type="text" />
   <button onClick={handleAddTodo}>Add Task</button>
   <button onClick={handleClearTodo}>Delete Completed</button>
   <div>{todos.filter(todo =>!todo.completed).length }Task Remaining</div>
  </div>
  )
}

export default App