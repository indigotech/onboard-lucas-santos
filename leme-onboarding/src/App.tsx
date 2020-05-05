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
          <input type="text" name="email" />
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
          <input type="password" name="password"/>
        </label>
      </form>
    );
  }
}

class SubmitButtom extends React.Component {
  render () {
    return (
      <button>
        Entrar
      </button>
    );
  }

  private handleButtonTap = () => {
    // do something when button click
  }
}

export default App;
