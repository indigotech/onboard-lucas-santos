import React from 'react';
import './LoginPage.css';

export class Welcome extends React.Component{
    render () {
      return<h1>Bem-vindo(a) à Taqtile!</h1> 
    }
  }
  
export class EmailForm extends React.Component {
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
  
 export class PasswordForm extends React.Component {
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
  
export class SubmitButtom extends React.Component {
  
    render () {
      return (
        <button className="App_Button">
          Entrar
        </button>
      );
    }
}