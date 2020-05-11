import * as React from 'react';
import './LoginPage.css';
import {mutateLogin, saveToken} from './Authentication';
import {validationEmail, validationPassword, errorAlert } from './Validation';
import { useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';

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

    private authenticate =  () => {

        const emailError = validationEmail(this.state.email);

        const passwordError = validationPassword(this.state.password);

        const history = createBrowserHistory ()

        if(emailError === 0 && passwordError === 0 ) {

            // Return Promise
            mutateLogin(this.state.email, this.state.password)
            .then((response: any) => {
                saveToken(response)
                alert(response);

                history.push("/home");

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
            <form>
                <label>
                    E-mail:
                    <input className="App_Form" type="text" name="email" onChange={this.handleChange} />
                    <br />
                        Senha:
                    <input className="App_Form" type="password" name="password" onChange={this.handleChange} />
                    <br />
                    <button className="App_Button" onClick={this.authenticate}>
                        Entrar
                    </button>
                </label>
            </form>
        );
    }
}