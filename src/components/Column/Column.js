import React from 'react';
import styles from './Column.scss'
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon.js';


class Column extends React.Component {

  state = {                                         // only for initial state it's allowed to set state with " = ". In other cases it will be changed by this.setState inherited (odziedziczony) from class React.Component
    cards: this.props.cards || [],             // it gets properties that are unpacked in App.js from {...listData}. There is no need to import these props again here
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
  };

  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon}/>
          </span>
          {this.props.title}
        </h3>
        <div>
          {/* map() method returns converted elements of array this.state.columns - it creates an instance of Column class by using JSX (it assigns proper props from initial array (this.state.columns) to the key and columnProps arguments*/}
          {this.state.cards.map(({ key, ...cardProps }) => (                  // the "map()" method returns an array with changed content
            <Card key={key
            } {...cardProps} />                                               // it's mandatory to declare the "key" in JSX for objects/arrays
          ))}
        </div>

        <div className={styles.creator}>
          {/* "text" is a placeholder in input || action is init when "OK" button is clicked
          By using arrow function we ensure that this refers to instance of class List */}
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
      </section>
    );
  };
};

export default Column;