import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import registerServiceWorker from './registerServiceWorker';
import ItemList from './components/ItemList';
const store = configureStore();
//import {addArtical} from '../src/actions/index'
//window.store = store;
//window.addArtical = addArtical;
ReactDOM.render(
    <Provider store={store}>
        <ItemList />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

