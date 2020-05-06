import React from 'react';
import './LoginPage.css';

export class Welcome extends React.Component{
    render () {
      return<h1>Bem-vindo(a) à Taqtile!</h1> 
    }
  }

export class Login extends React.Component {
    render () {
        return (
           <form>
                <label>
                        E-mail: 
                    <input className="App_Form" type="text"/>
                    <br/>
                        Senha: 
                    <input className="App_Form" type="password"/>
                    <br/>
                    <button className="App_Button">
                        Entrar: 
                    </button>
                </label>
            </form>
        );
    }
}