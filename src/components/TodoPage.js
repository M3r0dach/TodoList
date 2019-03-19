import React from 'react';
import TodoList from './TodoList'
import {connect} from 'dva'
import styles from './TodoPage.css';

const stateToProps = ({todos})=>({todos})

class InputBox extends React.Component{
  render() {
    return (
      <li>
        <input type='text' ref='text' style={{width:'50%'}}/>
        <button onClick={()=>{
            this.props.dispatch({type:'todos/add',payload:this.refs.text.value})
            this.refs.text.value=''
          }
        }>
        +
        </button>
      </li>
    )
  }
}
class TodoPage extends React.Component{
  render() {
    return (
    <div className={styles.TodoPage}>
      <ul>
        <TodoList {...this.props}/>
        <InputBox {...this.props}/>
      </ul>
    </div>
    )
  }
}


export default connect(stateToProps)(TodoPage);
