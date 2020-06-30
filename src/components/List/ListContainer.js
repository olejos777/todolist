import { connect } from 'react-redux';
import List from './List';
import { getColumnsForList, createActionAddColumn } from '../../redux/columnsRedux.js';
import { createAction_moveCard } from '../../redux/cardsRedux';


const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({                          // this function dispatches action to store
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
  moveCard: payload => dispatch(createAction_moveCard(
    payload
  )),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

//console.log('mapDispatchToProps: ', mapDispatchToProps());
//console.log('connect: ', connect(mapStateToProps, mapDispatchToProps)(List));