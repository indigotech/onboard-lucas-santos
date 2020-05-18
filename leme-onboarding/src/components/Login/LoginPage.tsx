import * as React from 'react';
import './LoginPage.css';
import {mutateLogin, saveToken} from '../GraphQL/Authentication';
import {validationEmail, validationPassword, errorAlert } from '../GraphQL/Validation';
import {Button} from '../Components/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Welcome} from './Welcome';
import {Form} from '../Components/Form';


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

    handleButtomClick = () => {

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
                <h1>
                    <Row>
                        <Col xs={12}>
                            <Welcome/>
                        </Col>
                        <Col xs={12}>
                            E-mail:
                            <Form type="text" name="email" onChangeFunction={this.handleChange} />
                        </Col>
                    <Row>
                        <Col xs={12}>
                        Senha:
                        <Form type="password" name="password" onChangeFunction={this.handleChange} />
                        </Col>
                    </Row>
                        <Col xs={12}>
                        <Button title="Entrar" onClickFunction={this.handleButtomClick}/>
                        </Col>
                    </Row>
                </h1>
        );
    }
}