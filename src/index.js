import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/store/index';
import registerServiceWorker from './registerServiceWorker';

//import {addArtical} from '../src/actions/index'
//window.store = store;
//window.addArtical = addArtical;
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

