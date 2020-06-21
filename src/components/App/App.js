import React from 'react';
import styles from './App.scss';  // loaders configured in webpack.config.js in "module" section extract new components with styles
//import List from '../List/List.js';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
  }


  render() {
    const { title, subtitle } = this.props;

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {/* <List
          // spread operator that unpacks object or array. All properties of from dataStore.listData will be assigned to the component List as its properties
          {...listData}
        >
          <p>I&apos;m going to do nothing and live like a king</p>
        </List> */}
      </main>
    );
  }
}

export default App;
