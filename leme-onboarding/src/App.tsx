import React from 'react';
import './components/LoginPage.css';
import {Login} from './components/LoginPage';
import {Welcome} from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome/>
      <Login />
    </div>
  );
}

export default App;
