import { connect } from 'react-redux';
import App from './App';
import { createActionAddList } from '../../redux/listsRedux.js';
import { createAction_moveCard } from '../../redux/cardsRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
  //columns: state.columns,
});

/*const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createActionAddList({
    id: props.id,
    title,
  })),
  moveCard: payload => dispatch(createAction_moveCard(
    payload
  )),
});*/


/*Następnie w AppContainer.js musisz dodać funkcję mapDispatchToProps. Powinna ona mapować do propsa moveCard funkcję
strzałkową, która przyjmuje jeden argument (payload), a w rezultacie dispatchuje kreator akcji createAction_moveCard z argumentem
tej funkcji strzałkowej (payload).*/
const mapDispatchToProps = (dispatch) => ({
  moveCard: payload => dispatch(createAction_moveCard(
    payload,
  )),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);