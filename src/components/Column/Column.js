import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon.js';

const Column = props => (
  <section className={styles.component}>
    <h3 className={styles.title}>
      <span className={styles.icon}>
        <Icon name={props.icon} />
      </span>
      {props.title}
    </h3>
    <div className={styles.cards}>
      {props.cards.map(cardData => (
        <Card key={cardData.id} {...cardData} />
      ))}
    </div>

    <div className={styles.creator}>
      <Creator text={settings.cardCreatorText} action={props.addCard} />
    </div>
  </section>
);

Column.propTypes = {
  title: PropTypes.node.isRequired,
  cards: PropTypes.array,
  icon: PropTypes.node,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;