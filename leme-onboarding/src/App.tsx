import React from 'react';
import './components/LoginPage.css';
import {Welcome, EmailOboard, PasswordOnboard, SubmitButtom} from './components/LoginPage';

/*
Componentes: Welcome, EmailOnboard, PasswordOnboard, SubmitButtom
*/

function App() {

  return (
    <div className="App">
      <Welcome/>
      <EmailOboard/>
      <PasswordOnboard/>
      <SubmitButtom/>
    </div>
  );
}

export default App;
