import React from 'react'
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {

  static propTypes = {                             // static means that we are defining static property of this class and the this object will not be available for all instances. It will be defined as "List.propTypes" (class property and not instance property)
    title: PropTypes.node,
    imageSource: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  };

  static defaultProps = {
    description: settings.defaultListDescription, // in case content of object was not defined there can be defined default content which will be displayed
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero
          titleText={this.props.title}
          imageSource={this.props.image}
        />                                        {/* titleText - prop name (we choose the name) which is which is provided to component Hero. // this.props - refers to this class instance (App in this case). title - it's name of the prop (we choose the name for the props but has to be the same like in class from which it's imported) */}

        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}                   {/* if props are not defined(if they are not named) we can use prop "children" which will refer to children element of this class instance */}
        </div>

        <div className={styles.columns}>
          <Column columnTitle='Column 1'/>
          <Column columnTitle='Column 2'/>
          <Column columnTitle='Column 3'/>
        </div>
      </section>
    );
  };
}

export default List;