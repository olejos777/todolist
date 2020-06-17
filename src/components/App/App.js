import React from 'react';
import styles from './App.scss';  // loaders configured in webpack.config.js in "module" section extract new components with styles
import List from '../List/List.js';
import { pageContents, listData } from '../../data/dataStore.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List
          // spread operator that unpacks object or array. All properties of from dataStore.listData will be assigned to the component List as its properties
          {...listData}
        >
          <p>I'm going to do nothing and live like a king</p>
        </List>
      </main>
    );
  };
};

export default App;
