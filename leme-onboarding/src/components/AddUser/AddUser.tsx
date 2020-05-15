import React from 'react';
import { errorAddUser } from '../GraphQL/Validation';
import { AddUserState, mutationUser } from '../GraphQL/createUser';
import { createBrowserHistory } from 'history';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './AddUser.css'


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
                            <input type="text" name="name" onChange={this.handleChange} />
                        </Col>
                        <Col xs={3}>
                            <label>Email:</label>
                            <input type="text" name="email" onChange={this.handleChange} />
                        </Col>
                        <Col xs={3}>
                            <label>Telefone:</label>
                            <input type="text" name="phone" onChange={this.handleChange} />
                         </Col>
                         <Col xs={3}>
                            <label>Data de Nascimento:</label>
                            <input type="text" name="birthDate" onChange={this.handleChange} />
                        </Col>
                        <Col xs={3}>
                            <label>Senha:</label>
                            <input type="password" name="password" onChange={this.handleChange} />
                        </Col>
                        <Col xs={3}>
                            <label>Cargo:</label>
                            <select name="role" onChange={this.handleChangeSelect}>
                                <option value={"user"}>Usuário</option>
                                <option value={"admin"}>Administrador</option>
                            </select>
                        </Col>
                        <Col xs={12}>
                            <button onClick={this.handleButtonClick}>Adicionar</button>
                        </Col>
                    </Row>
                </Grid>
            </h1>
        )
    }
}