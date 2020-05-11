import gql from 'graphql-tag';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";


export const LOGIN_TAQ = gql`
mutation Login($data:LoginInputType!){
    login(data: $data){
      token
        user{
          id
          name
          phone
      }
    }
  }
`;

const httpLink = createHttpLink({
    uri: 'https://tq-template-server-sample.herokuapp.com/graphql'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

/**
 * Mutation login
 * 
 * @param {string} email 
 * @param {string} password 
 */

export function mutateLogin (email: string, password: string) {

    return (
        client.mutate({
            mutation: LOGIN_TAQ,
            variables : {
                data: { email, password }
            },
            fetchPolicy: "no-cache",
        })
    )
}

/**
 * Saves login token
 * 
 * @param {string} token 
 */

export function saveToken (token: string) {
    localStorage.setItem("TOKEN", token);
    console.log(localStorage.getItem("TOKEN"));
}