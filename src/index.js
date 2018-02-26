import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App'
import Faves from './components/faves'
import reducer from './reducers/listReducer.js'
import { addItem } from './actions/action';
import {Switch,BrowserRouter,Route} from 'react-router-dom';


const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
});


ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
<Switch>
<Route exact path="/" component={App}/>
<Route exact path="/faves" component={Faves}/>
</Switch>
</Provider>
</BrowserRouter>,
document.getElementById('root'));

