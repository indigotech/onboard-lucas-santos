import React from 'react';
import './HomePage.css';
import {Table} from 'react-bootstrap';
import {queryUsers} from '../GraphQL/Users';

export interface UsersListState {
    users : {
            name: string;
            email: string;
        }[];
        offset: number;
        limit: number;
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
            }
    }

    async query(offset: number, limit: number) {

        try {
            const responde = await queryUsers(offset, limit);
            this.setState({users: responde.users.nodes})
        } catch (Error) {
            alert("ERRO: " + Error.message);
        }
    }

    private handleNextPage =  () => {

        this.setState({offset: this.state.offset + 10})

        this.query(this.state.offset, this.state.limit);
    }

    private handlePreviousPage =  () => {

        this.setState({offset: this.state.offset - 10})

        this.query(this.state.offset, this.state.limit);
    }



    componentDidMount() {
        this.query(0, 10)
    }

    render () {

        const {users} = this.state

        return (
            <h1>
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
                <button onClick={this.handlePreviousPage}>Anterior</button>
                <button onClick={this.handleNextPage}>Próxima</button>
            </h1>
        
        );
    }
}