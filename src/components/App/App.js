import React from 'react';
import styles from './App.scss';  // loaders configured in webpack.config.js in "module" section extract new components with styles
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List                                                                                                                       /* to create a mix of HTML string + styled HTML you just need to close the code into brackets "{}"     every object in array has to posses key property which should be unique in particular array */
          title={['Things to do', <sup key='1'> soon!</sup>]}
          image={'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'}
        >
          <p>I'm going to do nothing and live like a king</p>
        </List>
      </main>
    );
  };
};

export default App;
