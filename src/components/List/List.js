import React from 'react'
import styles from './List.scss';
import Hero from '../Hero/Hero.js'

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} />     {/* titleText - prop name (we choose the name) which is which is provided to component Hero. // this.props - refers to this class instance (App in this case). title - it's name of the prop (we choose the name for the props but has to be the same like in class from which it's imported) */}
        <div className={styles.description}>
          {this.props.children}                   {/* if props are not defined(if they are not named) we can use prop "children" which will refer to children element of this class instance */}
        </div>
      </section>
    )
  }
}

export default List;