import React from 'react';
import TodoItem from './TodoItem'
const TodoList = props=>{
    const {todos, dispatch} = props
    const ord = (todo) => (todo.done?1:-1)*todo.id
    return todos.filter(todo=>!todo.del)
                .sort((a,b)=>ord(a)-ord(b))
                .map(todo=>(
                    <TodoItem todo={todo} key={todo.id} onCheck={()=>{
                        props.dispatch({type:'todos/check', payload:todo.id})
                    }} onDel={()=>{
                        props.dispatch({type:'todos/del', payload:todo.id})
                    }}/>
                ))
}

export default TodoList