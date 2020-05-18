import gql from 'graphql-tag';
import {client} from './Client';

const GETUSER = gql`
query user($id : ID!) {
    user( id : $id){
        name
        email
        phone
        birthDate
    }
}`;

export interface UserInfo {
        user:{  
            name: string;
            email: string;
            phone: string;
            birthDate: string;
            password: string;
        }
}


export async function queryUser(id: string) {
    const result = await client.query<UserInfo>({
        query: GETUSER,
        variables:  { id }
    })
    return result.data;
}