import React from 'react';
import './components/LoginPage.css';
import {Welcome, Login} from './components/LoginPage';

/*
Componentes: Welcome, EmailOnboard, PasswordOnboard, SubmitButtom
*/

function App() {

  return (
    <div className="App">
      <Welcome/>
      <Login/>
    </div>
  );
}

export default App;
