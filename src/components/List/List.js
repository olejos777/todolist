import React from 'react'
import styles from './List.scss';
import Hero from '../Hero/Hero.js'

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} />     {/* titleText - prop name (we choose the name) which is which is provided to component Hero. // this.props - refers to this class instance. title - it's name of the prop (we choose the name for the props but has to be the same like in class from which it's imported) */}
      </section>
    )
  }
}

export default List;