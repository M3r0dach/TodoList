import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import TodoPage from '../components/TodoPage'

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>TodoList</h1>
      <TodoPage/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default IndexPage;
