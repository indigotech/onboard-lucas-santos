import React from 'react';
import { errorAddUser } from '../GraphQL/Validation';
import { AddUserState, mutationUser } from '../GraphQL/createUser';
import { createBrowserHistory } from 'history';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './AddUser.css'
import {Form} from '../Components/Form';
import {Button} from '../Components/Button';
import {Select} from '../Components/Select'


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

    private handleButtonClick = async () => {

        try {
            const result = errorAddUser(this.state.name, this.state.email, this.state.phone, this.state.birthDate, this.state.password)

            if (result === true) {
                const userToMutate = this.state

                await mutationUser(userToMutate)
                history.push("/home");
                alert("Usuário Adicionado!");
            }
        } catch (Error) {
            alert(Error.message)
        }
    }

    render() {
        return (
            <h1>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h2>Adicionar Usuário</h2>
                        </Col>
                        <Col xs={3}>
                            <label >Nome:</label>
                            <Form type="text" name="name" onChangeFunction={this.handleChange} />
                        </Col>
                        <Col xs={3}>
                            <label>Email:</label>
                            <Form type="text" name="email" onChangeFunction={this.handleChange} />
                        </Col>
                        <Col xs={3}>
                            <label>Telefone:</label>
                            <Form type="text" name="phone" onChangeFunction={this.handleChange} />
                         </Col>
                         <Col xs={3}>
                            <label>Data de Nascimento:</label>
                            <Form type="text" name="birthDate" onChangeFunction={this.handleChange} />
                        </Col>
                        <Col xs={3}>
                            <label>Senha:</label>
                            <Form type="password" name="password" onChangeFunction={this.handleChange} />
                        </Col>
                        <Col xs={3}>
                            <label>Cargo:</label>
                            <Select name="role" onChangeFunction={this.handleChangeSelect} values={["user", "admin"]}></Select>
                        </Col>
                        <Col xs={12}>
                            <Button title="Adicionar" onClickFunction={this.handleButtonClick}/>
                        </Col>
                    </Row>
                </Grid>
            </h1>
        )
    }
}