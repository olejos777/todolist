import React from 'react'
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {

  state = {                                         // only for initial state it's allowed to set state with " = ". In other cases it will be changed by this.setState inherited (odziedziczony) from class React.Component
    columns: this.props.columns || [],             // it gets properties that are unpacked in App.js from {...listData}. There is no need to import these props again here
  }

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
        />                                        {/* titleText - prop name (we choose the name) which is provided to component Hero. // this.props - refers to this class instance (App in this case). title - it's name of the prop (we choose the name for the props but has to be the same like in class from which it's imported) */}

        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}  {/* it gets properties that are unpacked in App.js from {...listData}. There is no need to import these props again here */}
        </div>

        <div className={styles.columns}>
          {/* map() method returns converted elements of array this.state.columns - it creates an instance of Column class by using JSX (it assigns proper props from initial array (this.state.columns) to the key and columnProps arguments*/}
          {this.state.columns.map(({ key, ...columnProps }) => (                  // the "map()" method returns an array with changed content
            <Column key={key} {...columnProps} />                               // it's mandatory to declare the "key" in JSX for objects/arrays
          ))}

          {/*explaination of above: for each single column return {key} property assigned to other props (title, icon, cards)

                function(singleColumn){
                  const key = singleColumn.key;

                  const columnProps = {};

                  for(let propName in singleColumn){
                    if(propName != 'key'){
                      columnProps[propName] = singleColumn[propName];
                    }
                  }

                  return <Column key={key} {...columnProps} />
                }


                or:

                function(singleColumn){
                  {key, ...columnProps} = singleColumn;

                  return <Column key={key} {...columnProps} />
                }

                en zapis oszczędził nam sporo miejsca! Ale skoro tylko raz używamy argumentu singleColumn, to możemy w ogóle go nie nazywać,
                tylko od razu w deklaracji argumentów użyć wyrażenia {key, ...columnProps}.

                function({key, ...columnProps}){
                  return <Column key={key} {...columnProps} />
                }

          */
          }


        </div>
      </section>
    );
  };
}

export default List;