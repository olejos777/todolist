import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container';

const List = props => (
  <Container>
    <section className={styles.component}>
      <Hero
        titleText={props.title} imageSource={props.imageList} />

      <div className={styles.description}>
        {ReactHtmlParser(props.description)}
      </div>

      <div className={styles.columns}>
        {props.columns.map(columnData => (
          <Column key={columnData.id} {...columnData} />
        ))}
      </div>

      <div className={styles.creator}>
        <Creator text={settings.columnCreatorText} action={props.addColumn} />
      </div>
    </section>
  </Container>
);

List.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  columns: PropTypes.array,
  imageList: PropTypes.string,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: settings.defaultListDescription,
};

export default List;