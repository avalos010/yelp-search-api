import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/readable';
import App from './components/App';
import Reactjs from './components/react'
import Udacity from './components/Udacity'
import {fetchCategories,fetchPosts} from './actions/action'
import Reduxjs from './components/redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom';


const store = createStore(reducer,applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));


ReactDOM.render(<Provider store={store}>
	<BrowserRouter> 
	<Switch>
	<Route exact path="/" component={App}/>
	<Route exact path='/React' component={Reactjs}/>
	<Route exact path='/Redux' component={Reduxjs}/>
	<Route exact path='/Udacity' component={Udacity}/>


	</Switch>
	</BrowserRouter>
	</Provider>, document.getElementById('root'));
