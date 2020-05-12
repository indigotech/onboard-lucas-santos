import React from 'react';
import './HomePage.css';
import {Table} from 'react-bootstrap';
import {queryUsers, UsersList} from '../GraphQL/Users';

export class HomePage extends React.Component<{}, UsersList> {

    constructor (props: any) {
        super(props)

        this.state = {
            users: {
                nodes:[
                    {email: "",
                    name: "",
                }]
            }
        }
    }

    async query() {
        
        queryUsers().then((response: UsersList) => {
            this.setState({users: response.users})
        })
        .catch((Error: any) => {
            alert("ERRO: " + Error.message);
        })
    }

    componentDidMount() {
        this.query()
    }

    render () {
        
        const { nodes } = this.state.users

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
                            {nodes.map(function(item) {
                                    return <td>{item.name}</td>
                                })  
                             }
                        </tr>
                        <th> </th>
                            <tr>
                                {nodes.map(function(item) {
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
// {nodes.map(function(item) {
//     return <p>Nome: {item.name}, Email: {item.email} </p>
// })}