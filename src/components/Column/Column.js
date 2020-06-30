import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon.js';
import { Droppable } from 'react-beautiful-dnd';
//import { DragDropContext } from 'react-beautiful-dnd';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,
    id: PropTypes.string,
    moveCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { /*moveCard,*/ icon, title, cards, id, addCard } = this.props;
    /*const moveCardHandler = result => {
      if (
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ) {
        moveCard({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };*/

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        {/*<DragDropContext onDragEnd={moveCardHandler}>*/}
        <Droppable droppableId={id}>
          {provided => (
            <div className={styles.cards}  {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {/*</DragDropContext>*/}

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }

}

/*const Column = props => (
  <section className={styles.component}>
    <h3 className={styles.title}>
      <span className={styles.icon}>
        <Icon name={props.icon} />
      </span>
      {props.title}
    </h3>
    <DragDropContext onDragEnd={moveCardHandler}>
      <Droppable droppableId={props.id}>
        {provided => (
          <div className={styles.cards}  {...provided.droppableProps} ref={provided.innerRef}>
            {props.cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>

    <div className={styles.creator}>
      <Creator text={settings.cardCreatorText} action={props.addCard} />
    </div>
  </section>
);

Column.propTypes = {
  title: PropTypes.node.isRequired,
  cards: PropTypes.array,
  icon: PropTypes.node,
  addCard: PropTypes.func,
  id: PropTypes.string,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};*/

export default Column;