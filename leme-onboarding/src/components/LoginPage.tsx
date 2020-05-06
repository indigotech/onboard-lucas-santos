import React from 'react';
import './LoginPage.css';

export interface LoginPageState {
    email: string;
    password: string;
}

export class Welcome extends React.Component{
    render () {
      return<h1>Bem-vindo(a) à Taqtile!</h1> 
    }
  }

export class Login extends React.Component<{},LoginPageState> {


    email: string = "";
    password: string = "";
    
    handleEmail () {
        this.email = "lucas@taqtile.com"
    }

    handlePassword () {
        this.password =  "senha123"
    }

    validationEmail(email: string) {

        const expression = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

        if (expression.test(String(email).toLowerCase())) { 
            return true;
        }
        else {
            return false
        }
    }

    validationPassword (password: string) {

        if (password.length < 7) {
            return false;
        }
        else {
            return true;
        }
        
    }

    private showError = () => {
        this.handleEmail();
        this.handlePassword();

        console.log(this.email);
        console.log(this.validationEmail(this.email));

        console.log(this.password);
        console.log(this.validationPassword(this.password));

        alert()
    }

    render () {
        return (
           <form>
                <label>
                        E-mail: 
                    <input className="App_Form" type="text" onChange={this.handleEmail}/>
                    <br/>
                        Senha: 
                    <input className="App_Form" type="password" onChange={this.handlePassword}/>
                    <br/>
                    <button className="App_Button" onClick={this.showError}>
                        Entrar: 
                    </button>
                </label>
            </form>
        );
    }
}