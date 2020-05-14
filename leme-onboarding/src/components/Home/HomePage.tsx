import React from 'react';
import './HomePage.css';
import {Table} from 'react-bootstrap';
import {queryUsers} from '../GraphQL/Users';
import {history} from '../GraphQL/Authentication';

export interface UsersListState {
    users : {
            name: string;
            email: string;
        }[];
        offset: number;
        limit: number;
        hasNextPage: boolean;
        hasPreviosPage: boolean;
}

export class HomePage extends React.Component<{}, UsersListState> {

    constructor (props: any) {
        super(props)

        this.state = {
            users: [
                    {email: "",
                    name: "",
                }],
                offset: 0,
                limit: 10,
                hasNextPage: true,
                hasPreviosPage: false,
            }
    }

    async query(offset: number, limit: number) {

        try {
            const responde = await queryUsers(offset, limit);
            this.setState({
              users: responde.users.nodes,
              hasNextPage: responde.users.pageInfo.hasNextPage,
              hasPreviosPage: responde.users.pageInfo.hasPreviousPage,
            });
        } catch (Error) {
            alert("ERRO: " + Error.message);
        }


    }

    private handleNextPage = async () => {

        const nextOffset = this.state.offset + 10;

        await this.query(nextOffset, this.state.limit);

        this.setState({offset: nextOffset});
    }

    private handlePreviousPage =  async () => {

        const nextOffset = this.state.offset - 10;

        await this.query(nextOffset, this.state.limit);

        this.setState({offset: nextOffset});
    }

    private handleAddUser = () => {
        history.push("/add");
    }

    componentDidMount() {
        this.query(this.state.offset, this.state.limit);
    }

    render () {

        const {users} = this.state

        return (
            <h1>
                <button onClick={this.handleAddUser}>Adicionar um novo usuário</button>
                <Table striped bordered hover>
                    <thead>
                        <td>Nome</td>
                        <br/>
                        <td>Email</td>
                    </thead>
                    <tbody>
                        <tr>
                            {users.map(function(item) {
                                    return <td>{item.name}</td>
                                })  
                             }
                        </tr>
                        <th> </th>
                            <tr>
                                {users.map(function(item) {
                                        return <td>{item.email}</td>
                                    })  
                                }
                            </tr>
                    </tbody>
                </Table>
                <div>
                    <button onClick={this.handlePreviousPage} disabled={!this.state.hasPreviosPage}>Anterior</button>
                    <button onClick={this.handleNextPage}disabled={!this.state.hasNextPage} >Próxima</button>
                </div>
            </h1>
        
        );
    }
}
