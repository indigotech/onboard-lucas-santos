import React from 'react';
import './HomePage.css';
import {Table} from 'react-bootstrap';
import {queryUsers, UsersList} from '../GraphQL/Users';

export interface UsersListState {
    users : {
            name: string;
            email: string;
        }[];
}

export class HomePage extends React.Component<{}, UsersListState> {

    constructor (props: any) {
        super(props)

        this.state = {
            users: [
                    {email: "",
                    name: "",
                }]
            }
    }

    async query() {

        try {
            const responde = await queryUsers(0, 10);
            this.setState({users: responde.users.nodes})
        } catch (Error) {
            alert("ERRO: " + Error.message);
        }
    }

    componentDidMount() {
        this.query()
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
            </h1>
        
        );
    }
}