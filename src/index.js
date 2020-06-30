import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';     // Makes the Redux store available to the connect() calls in the component hierarchy below.
import store from './redux/store.js';       // Imports combined state (by combined reducers) from store.js

//          what to render and  where to render
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));


