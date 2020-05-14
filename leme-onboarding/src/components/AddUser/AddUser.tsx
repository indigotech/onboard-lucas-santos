import React from 'react';
import './AddUser.css';
import {validationPassword, validationEmail, validationName, validationPhone, validationBirthDate} from '../GraphQL/Validation';

export interface AddUserState {
    name: string;
    email: string;
    phone: string;
    birthDate: string;
    password: string;
}

export class AddUser extends React.Component<{},AddUserState> {
    constructor (props: any) {
        super(props)

        this.state = {
            name: "",
            email: "",
            phone: "",
            birthDate: "",
            password: "",
        }
    }

    private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value
        } as Pick<AddUserState, keyof AddUserState>);
    };

    private handleButtomClick =  () => {
        
        alert(validationPhone(this.state.phone));

    }
    
    render() {
        return (
            <label>
                Nome:
                <input type="text" name="name" onChange={this.handleChange}/>
                <br/>
                Email:
                <input type="text" name="email" onChange={this.handleChange}/>
                <br/>
                Telefone:
                <input type="text" name="phone" onChange={this.handleChange}/>
                <br/>
                Data de Nascimento:
                <input type="text" name="birthDate" onChange={this.handleChange}/>
                <br/>
                Senha:
                <input type="password" name="password" onChange={this.handleChange}/>
                <br/>
                <button onClick={this.handleButtomClick}>Adicionar</button>
            </label>
        )
    }
}