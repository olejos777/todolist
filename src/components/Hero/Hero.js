import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

            // props argument declaration     // in props we can declare string, numbers, arrays, objects, functions
const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>
      {props.titleText}                             {/* in function component we skip "this" before props */}
    </h2>
    <img className={styles.image} src={props.imageSource}></img>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node,
  imageSource: PropTypes.string,
};

export default Hero;