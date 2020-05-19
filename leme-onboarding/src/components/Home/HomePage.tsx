import React from 'react';
import './HomePage.css';
import {queryUsers} from '../GraphQL/Users';
import {history} from '../GraphQL/Authentication';
import { Row, Col } from 'react-flexbox-grid';
import { Button } from '../Components/Button';

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
                <Row>
                    <Col xs={12}>
                        <Button title="Adicionar um novo usuário" onClickFunction={this.handleAddUser}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>ID</Col>
                    <Col xs={5}>Nome</Col>
                    <Col xs={5}>Email</Col>
                </Row>
                        {users.map(function(item){
                            const userPath: string = "user/" + item.id;
                            return( 
                                <Row between="xs">
                                    <Col xs={2}>
                                        <a href={userPath}>{item.id}</a>
                                    </Col>
                                    <Col xs={5}>{item.name}</Col>
                                    <Col xs={5}>{item.email}</Col>
                                </Row>
                            )
                        })}
                    <Row>
                        <Col>
                            <Button title="Anterior" onClickFunction={this.handlePreviousPage} disabled={!this.state.hasPreviosPage}/>
                            <Button title="Próxima" onClickFunction={this.handleNextPage} disabled={!this.state.hasNextPage} />
                        </Col>
                    </Row>
            </h1>
        
        );
    }
}
