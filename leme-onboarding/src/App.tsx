import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  return (
    <div className="App">
      <Welcome/>
      <Login/>
    </div>
  );
}

class Welcome extends React.Component{
  render () {
    return<h1>Bem-vindo(a) à Taqtile!</h1> 
  }
}

class Login extends React.Component {
  render () {
    return (
      <form>
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <br/>
        <label>
          Senha
          <input type="password" name="password"/>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );  
  }
}

//export default welcome;
export default App;
