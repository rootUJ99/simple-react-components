import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Drawer from './Drawer';
import Modal from './Modal';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter } from 'react-router-dom';



const Routing = () =>{
  return(
    <BrowserRouter>
      <Route exact path='/' component={App}/>
      <Route path='/drawer' component={Drawer} />
      <Route path='/modal' component={Modal} />
    </BrowserRouter>
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
