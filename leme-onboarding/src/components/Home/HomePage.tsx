import React from 'react';
import './HomePage.css';
import {Table} from 'react-bootstrap';
import {queryUsers} from '../GraphQL/Users';
import {history} from '../GraphQL/Authentication';
import { Grid, Row, Col } from 'react-flexbox-grid';

export interface UsersListState {
    users : {
            id: string;
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
                    {id:"",
                    email: "",
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
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <button onClick={this.handleAddUser}>Adicionar um novo usuário</button>
                        </Col>
                        <Col xs={6}>Nome</Col>
                        <Col xs={6}>Email</Col>
                            {users.map(function(item){
                                const userPath: string = "user/" + item.id;
<<<<<<< HEAD
                                        return( 
                                            <td>
                                            <a href={userPath}>
                                            {item.name}
                                            </a>
                                            </td>
                                        )
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
=======
                                return( 
                                <Col xs={12}>{item.name} {item.email}</Col>
                                )
                            })}
                            <button onClick={this.handlePreviousPage} disabled={!this.state.hasPreviosPage}>Anterior</button>
                            <button onClick={this.handleNextPage}disabled={!this.state.hasNextPage} >Próxima</button>
                    </Row>
                </Grid>
>>>>>>> 844e289... Add grid
            </h1>
        
        );
    }
}
