import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Switch, Route, BrowserRouter} from "react-router-dom";
import { HomePage } from './components/Home/HomePage';
import {AddUser} from './components/AddUser/AddUser';
import { UserInfo } from './components/UserInfo/UserInfo';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/login" exact={true} component={App} />
          <Route path="/home" component={HomePage} />
          <Route path="/add" component={AddUser} />
          <Route path="/user/:id" component={UserInfo}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
