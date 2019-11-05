import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from "./reducers/reducer";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { BrowserRouter as Router } from "react-router-dom";
const store = createStore(reducer)

ReactDOM.render(<Provider store={store} >
    <Router><App /></Router>    
</Provider>, document.getElementById('root'));
