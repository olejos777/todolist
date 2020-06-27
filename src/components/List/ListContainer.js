import { connect } from 'react-redux';
import List from './List';
import { getColumnsForList, createActionAddColumn } from '../../redux/columnsRedux.js';


const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({                          // this function dispatches action to store
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

console.log('mapDispatchToProps: ', mapDispatchToProps());
console.log('connect: ', connect(mapStateToProps, mapDispatchToProps)(List));