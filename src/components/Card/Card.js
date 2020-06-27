import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

const Card = props => (
  <Draggable draggableId={props.id} index={props.index}>
    {(provided) => (
      <article
        className={styles.component}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {props.title}
      </article>
    )}
  </Draggable>
);

Card.propTypes = {
  title: PropTypes.node.isRequired,
  id: PropTypes.string,
  index: PropTypes.number,
};

export default Card;