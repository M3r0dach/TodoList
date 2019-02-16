import React from 'react';
import TodoItem from './TodoItem'
const TodoList = props=>{
    const {todos, dispatch} = props
    return todos.filter(todo=>!todo.del)
                .map(todo=>(
                    <TodoItem todo={todo} key={todo.id} onCheck={()=>{
                        props.dispatch({type:'todos/check', payload:todo.id})
                    }} onDel={()=>{
                        props.dispatch({type:'todos/del', payload:todo.id})
                    }}/>
                ))
}

export default TodoList