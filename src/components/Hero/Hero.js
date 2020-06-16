import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
  <header className={styles.component}>
    <h2 className={styles.title}>
      Things to do
    </h2>
    <img className={styles.image} src='https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
  </header>
);

export default Hero;