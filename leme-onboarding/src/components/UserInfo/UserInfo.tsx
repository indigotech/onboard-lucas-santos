import React from 'react';
import {queryUser} from '../GraphQL/getUser';
import './UserInfo.css';
import { Button } from '../Components/Button';
import { createBrowserHistory } from 'history';
import {DD, DL, DT} from '../Components/List';

export const history = createBrowserHistory({forceRefresh:true});

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

    const splitedUrl = url.split("/")

    // id is the last element of the splitted url.
    const id: string = String(splitedUrl.pop())

    return id;
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

    private async query (id: string) {
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

    private handleButton = () => {
        history.push("/home")
    }

    render() {
        return (
                <h1>
                    <DL>

                        <DT>Informações sobre o usuário {this.state.id}</DT>
                        <br/>
                        <DT>Nome</DT>
                        <DD>{this.state.data.name}</DD>

                        <DT>Email</DT>
                        <DD>{this.state.data.email}</DD>

                        <DT>Data de Nascimento</DT>
                        <DD>{this.state.data.birthDate}</DD>

                        <DT>Telefone</DT>
                        <DD>{this.state.data.phone}</DD>

                        <Button title="Voltar" onClickFunction={this.handleButton}/>

                    </DL>
                </h1>
        );
    }
}