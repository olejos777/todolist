import React from 'react';
import styles from './App.scss';  // loaders configured in webpack.config.js in "module" section imported components creaded by them
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hellow world!</h2>
        <List title='Things to do' />
      </main>
    )
  }
}

export default App;
