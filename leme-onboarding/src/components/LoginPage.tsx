import React from 'react';
import './LoginPage.css';
import {mutateLogin} from './Authentication';

export interface LoginPageState {
    email: string;
    password: string;
}

export class Login extends React.Component<{}, LoginPageState> {

    constructor(props: any) {
        super(props);

        this.state = {
            email: "",
            password: "",

        }

    }

    private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value
        } as Pick<LoginPageState, keyof LoginPageState>);
    };

    validationEmail(email: string) {
        /**
         * 0 - Validated Email
         * 1 - Empty field
         * 2 Email not validated
        */

        if (email.length === 0) {
            return 1;
        }

        const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

        if (emailRegex.test(String(email).toLowerCase())) {
            return 0;
        }
        else {
            return 2;
        }
    }

    validationPassword(password: string) {
        /*
         * 0 Validated Password
         * 1 Empty
         * 2 Minimum 7 characters
         * 3 One digit e one number 
         */

        if (password.length === 0) {
            return 1;
        }

        const passwordRegex = /^.*(?=.{7,20})(?=.*\d)(?=.*[a-zA-Z]).*$/;

        if (password.length < 7) {
            return 2;
        }
        else if (!passwordRegex.test(String(password).toLowerCase())) {
            return 3;
        }
        else {
            return 0
        }

    }

    private validate = () => {

        let emailAlert: string = "";
        let passwordAlert: string = "";

        let emailError = this.validationEmail(this.state.email)

        let passwordError = this.validationPassword(this.state.password);

        // Email Messages
        if (emailError === 0) {
            emailAlert = "Email Validado!";
        }
        else {
            if (emailError === 1) {
                emailAlert = "Preencha o email";
            }
            else if (emailError === 2) {
                emailAlert = "Email invalido";
            }

            alert(emailAlert);

        }

        // Password Messages
        if (passwordError === 0) {
            passwordAlert = "Senha válida!";
        }
        else {
            if (passwordError === 1) {
                passwordAlert = "Preencha a senha";
            }
            else if (passwordError === 2) {
                passwordAlert = "Minimo 7 caracteres";
            }
            else if (passwordError === 3) {
                passwordAlert = "Necessário pelo menos 1 número e 1 letra";
            }

            alert(passwordAlert);

        }

        // Return Promise
        mutateLogin(this.state.email, this.state.password)
            .then((response: any) => {
                alert(response.data.login.token);
            })
            .catch( (Error: any) => {
                alert(Error.message);
            })

    }

    render() {
        return (
            <form>
                <label>
                    E-mail:
                    <input className="App_Form" type="text" name="email" onChange={this.handleChange} />
                    <br />
                        Senha:
                    <input className="App_Form" type="password" name="password" onChange={this.handleChange} />
                    <br />
                    <button className="App_Button" onClick={this.validate}>
                        Entrar:
                    </button>
                </label>
            </form>
        );
    }
}