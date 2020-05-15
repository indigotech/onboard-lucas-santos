import gql from 'graphql-tag';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";

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

const httpLink = createHttpLink({
    uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
    headers: {
        authorization: localStorage.getItem("TOKEN")
    }
})

export interface AddUserState {
    name: string;
    email: string;
    phone: string;
    birthDate: string;
    password: string;
    role: string;
}

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

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