import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';

class List extends React.Component {
  static propTypes = {                             // static means that we are defining static property of this class and the this object will not be available for all instances. It will be defined as "List.propTypes" (class property and not instance property)
    title: PropTypes.node,
    imageSource: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
    addColumn: PropTypes.func,
  };

  static defaultProps = {
    description: settings.defaultListDescription, // in case content of object was not defined there can be defined default content which will be displayed
  }

  render() {
    const { title, image, description, columns, addColumn } = this.props;

    return (
      <section className={styles.component}>
        <Hero
          titleText={title} imageSource={image} />                {/* titleText - prop name (we choose the name) which is provided to component Hero. // this.props - refers to this class instance (App in this case). title - it's name of the prop (we choose the name for the props but has to be the same like in class from which it's imported) */}

        <div className={styles.description}>
          {ReactHtmlParser(description)}  {                       /* it gets properties that are unpacked in App.js from {...listData}. There is no need to import these props again here */}
        </div>

        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
          {/*{console.log('columns.map to: ', columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          )))}*/}
        </div>

        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn} />
          {/*{console.log('addColumn to: ', addColumn)}*/}
        </div>
      </section>
    );
  }
}


export default List;