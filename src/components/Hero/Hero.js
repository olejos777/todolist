import React from 'react';
import styles from './Hero.scss';

            // props argument declaration
const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>
      {props.titleText}                             {/* in function component we skip "this" before props */}
    </h2>
    <img className={styles.image} src='https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
  </header>
);

export default Hero;