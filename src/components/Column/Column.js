import React from 'react';
import styles from './Column.scss'
import PropTypes from 'prop-types';


class Column extends React.Component {

  static propTypes = {
    //columnTitle: PropTypes.node.isRequired,
  };

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {this.props.columnTitle}                          {/* it gets the columnTitle defined in List.js from objects <Column ... /> */}
        </h3>
      </section>
    );
  };
};

export default Column;