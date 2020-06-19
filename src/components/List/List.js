import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';

class List extends React.Component {

  state = {                                         // only for initial state it's allowed to set state with " = ". In other cases it will be changed by this.setState inherited (odziedziczony) from class React.Component
    columns: this.props.columns || [],             // it gets properties that are unpacked in App.js from {...listData}. There is no need to import these props again here
  }

  static propTypes = {                             // static means that we are defining static property of this class and the this object will not be available for all instances. It will be defined as "List.propTypes" (class property and not instance property)
    title: PropTypes.node,
    imageSource: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
  };

  static defaultProps = {
    description: settings.defaultListDescription, // in case content of object was not defined there can be defined default content which will be displayed
  }

  addColumn(title) {
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero
          titleText={this.props.title}
          imageSource={this.props.image}
        />                                        {/* titleText - prop name (we choose the name) which is provided to component Hero. // this.props - refers to this class instance (App in this case). title - it's name of the prop (we choose the name for the props but has to be the same like in class from which it's imported) */}

        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}  {/* it gets properties that are unpacked in App.js from {...listData}. There is no need to import these props again here */}
        </div>

        <div className={styles.columns}>
          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>

        <div className={styles.creator}>
          {/* "text" is a placeholder in input || action is init when "OK" button is clicked
          By using arrow function we ensure that this refers to instance of class List */}
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
        </div>
      </section>
    );
  }
}

export default List;