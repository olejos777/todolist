import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import Creator from '../Creator/Creator.js';
//import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon.js';


class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
  };

  render() {
    const { title, icon } = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        {/*<div>
          {this.state.cards.map(({ key, ...cardProps }) => (                  // the "map()" method returns an array with changed content
            <Card key={key
            } {...cardProps} />                                               // it's mandatory to declare the "key" in JSX for objects/arrays
          ))}
        </div> */}

        {/*<div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div> */}
      </section>
    );
  }
}

export default Column;