import * as React from 'react';
import './LoginPage.css';
import {mutateLogin, saveToken} from './Authentication';
import {validationEmail, validationPassword, errorAlert } from './Validation';


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

    private handleButtomClick =  () => {

        const emailError = validationEmail(this.state.email);

        const passwordError = validationPassword(this.state.password);

        if(emailError === 0 && passwordError === 0 ) {

            // Return Promise
            mutateLogin(this.state.email, this.state.password)
            .then((response: any) => {
                saveToken(response);
            })
            .catch( (Error: any) => {
                alert(Error.message);
            })
        }
        else {
            errorAlert(emailError, passwordError);
        }
    }

    render() {
        return (
                <label>
                    E-mail:
                    <input className="App_Form" type="text" name="email" onChange={this.handleChange} />
                    <br />
                        Senha:
                    <input className="App_Form" type="password" name="password" onChange={this.handleChange} />
                    <br />
                    <button className="App_Button" onClick={this.handleButtomClick}>
                        Entrar
                    </button>
                </label>
        );
    }
}