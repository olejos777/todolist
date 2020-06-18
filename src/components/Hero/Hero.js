import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

            // props argument declaration     // in props we can declare string, numbers, arrays, objects, functions
const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>
      {ReactHtmlParser(props.titleText)}                             {/* allows displaying string instead the Html code  */}
    </h2>
    <img className={styles.image} src={props.imageSource}></img>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node,
  imageSource: PropTypes.string,
};

export default Hero;