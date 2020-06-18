import React from 'react';
import styles from './Column.scss'
import PropTypes from 'prop-types';


class Column extends React.Component {

  static propTypes = {
    //title: PropTypes.node.isRequired,
  };

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {this.props.title}                          {/* it gets the title defined in List.js from objects <Column ... /> */}
        </h3>
      </section>
    );
  };
};

export default Column;