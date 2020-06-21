import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
});

export default connect(mapStateToProps)(App);