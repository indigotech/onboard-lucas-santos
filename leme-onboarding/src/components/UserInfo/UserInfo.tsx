import React from 'react';
import {queryUser} from '../GraphQL/getUser';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './UserInfo.css'

interface User {
    id: string
    data: {
        name: string;
        email: string;
        phone: string;
        birthDate: string;
        password: string;
    }
}

function getUserId (url: string){
    const index: number = url.indexOf("/user");

    return url.slice(index + 6);
}

export class UserInfo extends React.Component<{},User> {

    constructor (props: any) {
        super (props)


        
        this.state = {
            id: getUserId(window.location.href),
            data: {
                name: "",
                email: "",
                phone: "",
                birthDate: "",
                password: ""
            }
        }
    }

    async query (id: string) {
        try {
            const result  = await queryUser(id)

            this.setState ({
                data: result.user
            })

        } catch (Error) {
            alert(Error.message)
        }
    }

    componentDidMount () {
       this.query(this.state.id)
    }      

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12}>Informações sobre o usuário {this.state.id}</Col>
                    <Col xs={12}>Nome: {this.state.data.name}</Col>
                    <Col xs={12}>Email: {this.state.data.email}</Col>
                    <Col xs={12}>Data de Nascimento: {this.state.data.birthDate}</Col>
                    <Col xs={12}>Telefone: {this.state.data.phone}</Col>
                </Row>
            </Grid>
        );
    }
}