import React, { useState } from 'react'
import TodoList from './TodoList'



const App = () => {

  const [todos, settodos] = useState([{id:1,name:'todo 1', completed:false}])


  return (<div>

   <TodoList  todos={todos}/>
   <input type="text" />
   <button>Add Task</button>
   <button>Delete Completed</button>
   <div>0 Task Remaining</div>
  </div>
  )
}

export default App