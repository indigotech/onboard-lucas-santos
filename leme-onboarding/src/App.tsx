import React from 'react';
import './components/Login/LoginPage.css';
import {Login} from './components/Login/LoginPage';
import {Welcome} from './components/Login/Welcome';


function App() {
  return (
    <div className="App">
      <Welcome/>
      <Login />
    </div>
  );
}

export default App;
