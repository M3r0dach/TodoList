import React from 'react'
const TodoItem = ({todo, onCheck, onDel}) => (
    <li>
      {todo.name}
      <input type='checkbox' onClick={onCheck} checked={todo.done}/>
      <button onClick={onDel}>x</button>
    </li>
)
export default TodoItem