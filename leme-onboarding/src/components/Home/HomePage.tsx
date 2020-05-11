import React from 'react';
import {Table} from 'react-bootstrap';
import './HomePage.css'

interface HomePageState {
    name: Array<string>,
    email: Array<string>,
}

export class HomePage extends React.Component<{}, HomePageState> {

    constructor (props: any) {
        super(props)

        this.state = {
            name: ["Lucas", "André", "Paula"],
            email: ["lucas@email.com", "andre@email.com", "paula@email.com"],
        }

    }

    render () {
        return (
            <h1>
                Lista de Usuários
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> Nome </th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.state.name.map(function(item) {
                                    return <td>{item}</td>
                                })  
                             }
                        </tr>
                        <th> </th>
                            <tr>
                                {this.state.email.map(function(item) {
                                        return <td>{item}</td>
                                    })  
                                }
                            </tr>
                    </tbody>
                </Table>
            </h1>
        
        );
    }
}