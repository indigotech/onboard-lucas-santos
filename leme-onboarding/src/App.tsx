import React from 'react';
import './components/LoginPage.css';
import {Welcome, EmailForm, PasswordForm, SubmitButtom} from './components/LoginPage';

/*
Componentes: Welcome, EmailOnboard, PasswordOnboard, SubmitButtom
*/

function App() {

  return (
    <div className="App">
      <Welcome/>
      <EmailForm/>
      <PasswordForm/>
      <SubmitButtom/>
    </div>
  );
}

export default App;
