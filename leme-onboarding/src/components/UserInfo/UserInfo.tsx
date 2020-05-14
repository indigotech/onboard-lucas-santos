import React from 'react';
import {queryUser} from '../GraphQL/getUser';

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
                data: result
            })

            alert(this)
        } catch (Error) {
            alert(Error.message)
        }
    }

    componentDidMount () {
       this.query(this.state.id)
    }      

    render() {
        return (
            <h1>Info Sobre os Usuários
                <h2>{this.state.data.name}</h2>
            </h1>
        );
    }
}