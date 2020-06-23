import React from 'react';
import styles from './App.scss';  // loaders configured in webpack.config.js in "module" section extract new components with styles
import List from '../List/List.js';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }


  render() {
    const { title, subtitle, lists } = this.props;

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default App;
