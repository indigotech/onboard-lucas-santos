import gql from 'graphql-tag';
import {client} from './Client';

const CREATE = gql`
mutation createUser($data : UserInputType!) {
    createUser( data : $data){
        id
        name
        phone
        birthDate
        email
    }
}
`;

export interface AddUserState {
    name: string;
    email: string;
    phone: string;
    birthDate: string;
    password: string;
    role: string;
}


export async function mutationUser (user: AddUserState) {

    const name = user.name;
    const email = user.email;
    const phone = user.phone;
    const birthDate = user.birthDate;
    const password = user.password
    const role = user.role;

    const result = await client.mutate<AddUserState>({
        mutation: CREATE,
        variables: { 
            data:{
                name,
                email,
                phone,
                birthDate,
                password,
                role,
            } 
        }
    })

   return result.data;
}