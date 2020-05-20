import React from 'react';
import { AddUserState, mutationUser } from '../GraphQL/createUser';
import { createBrowserHistory } from 'history';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './AddUser.css'
import {Form} from '../Components/Form';
import {Button} from '../Components/Button';
import {Select} from '../Components/Select'
import { H1 } from '../Components/H1';
import * as Validate from '../GraphQL/Validation';


export const history = createBrowserHistory({forceRefresh:true});

export class AddUser extends React.Component<{}, AddUserState> {
    constructor(props: any) {
        super(props)

        this.state = {
            name: "",
            email: "",
            phone: "",
            birthDate: "",
            password: "",
            role: "user"
        }
    }

    private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value
        } as Pick<AddUserState, keyof AddUserState>);
    };

    private handleChangeSelect = (e: React.FormEvent<HTMLSelectElement>) => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value
        } as Pick<AddUserState, keyof AddUserState>);
    };

    private handleButtonAdd = async () => {

        try {
            const result = Validate.errorAddUser(this.state.name, this.state.email, this.state.phone, this.state.birthDate, this.state.password)

            if (result === true) {
                const userToMutate = this.state

                await mutationUser(userToMutate)
                history.push("/home");
                alert("Usuário Adicionado!");
            }
            else {

            }
        } catch (Error) {
            alert(Error.message)
        }
    }

    private handleButtonBack = () => {
        history.push("/home")
    }

    render() {
        return (
            <h1>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <H1>Adicionar Usuário</H1>
                        </Col>
                        <Col xs={6}>
                            <Form title="Nome" type="text" name="name" placeHolder="Insira o nome" onChangeFunction={this.handleChange} validationFunction={Validate.validationName}/>
                        </Col>
                        <Col xs={6}>
                            <Form title="Email" type="text" name="email" placeHolder="Insira o email" onChangeFunction={this.handleChange} validationFunction={Validate.validationEmail} />
                        </Col>
                        <Col xs={6}>
                            <Form title="Telefone" type="text" name="phone" placeHolder="Insira o DD9XXXXXXXX" onChangeFunction={this.handleChange} validationFunction={Validate.validationPhone} />
                        </Col>
                        <Col xs={6}>
                            <Form title="Data de nascimento" type="text" name="birthDate" placeHolder="Insira yyyy-mm-dd" onChangeFunction={this.handleChange} validationFunction={Validate.validationBirthDate} />
                        </Col>
                        <Col xs={6}>
                            <Form title="Senha" type="password" name="password" placeHolder="Insira a senha" onChangeFunction={this.handleChange} validationFunction={Validate.validationPassword} />
                        </Col>
                        <Col xs={6}>
                            <Select title="Cargo" name="role" onChangeFunction={this.handleChangeSelect} values={["user", "admin"]}></Select>
                        </Col>
                        <Col xs={6}>
                            <Button title="Voltar" onClickFunction={this.handleButtonBack}/>
                        </Col>
                        <Col xs={6}>
                            <Button title="Adicionar" onClickFunction={this.handleButtonAdd}/>
                        </Col>
                    </Row>
                </Grid>
            </h1>
        )
    }
}