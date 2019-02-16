import React from 'react';
import TodoList from './TodoList'
import {connect} from 'dva'
import styles from '../routes/IndexPage.css';

const stateToProps = ({todos})=>({todos})

class InputBox extends React.Component{
  render() {
    return (
      <li>
        <input type='text' ref='text'/>
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
    <ul className={styles.list}>
      <TodoList {...this.props}/>
      <InputBox {...this.props}/>
    </ul>);
  }
}


export default connect(stateToProps)(TodoPage);
