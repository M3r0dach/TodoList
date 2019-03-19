import React from 'react'
const TodoItem = ({todo, onCheck, onDel}) => (
    <li>
      {todo.done?<del>{todo.name}</del>:todo.name}
      <input type='checkbox' onChange={onCheck} checked={todo.done}/>
      <button onClick={onDel}>x</button>
    </li>
)
export default TodoItem