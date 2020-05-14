import gql from 'graphql-tag';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";

const GETUSER = gql`query user($id : ID!) {
    user( id : $id){
        id
        name
        phone
        birthDate
        email
        role
    }
}`;

const httpLink = createHttpLink({
    uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
    headers: {
        authorization: localStorage.getItem("TOKEN")
    }
})

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export interface UserInfo {
    name: string;
    email: string;
    phone: string;
    birthDate: string;
    password: string;
}


export async function queryUser(id: string) {
    const result = await client.query<UserInfo>({
        query: GETUSER,
        variables:  { id }
    })

    return result.data;
}