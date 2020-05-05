import React from 'react';
import './App.css';

/*
Componentes: Welcome, LoginOnboard, PasswordOnboard, SubmitButtom
*/

function App() {
  return (
    <div className="App">
      <Welcome/>
      <LoginOboard/>
      <PasswordOnboard/>
      <SubmitButtom/>
    </div>
  );
}

class Welcome extends React.Component{
  render () {
    return<h1>Bem-vindo(a) à Taqtile!</h1> 
  }
}

class LoginOboard extends React.Component {
  render () {
    return (
      <form>
        <label>
          E-mail: 
          <input className="App_Form"  type="text" name="email" />
        </label>
      </form>
    );  
  }
}

class PasswordOnboard extends React.Component {
  render () {
    return (
      <form>
        <label>
          Senha:  
          <input className="App_Form" type="password" name="password"/>
        </label>
      </form>
    );
  }
}

class SubmitButtom extends React.Component {

  render () {
    return (
      <button className="App_Button">
        Entrar
      </button>
    );
  }
}

export default App;
