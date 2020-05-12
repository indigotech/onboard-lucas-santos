import gql from 'graphql-tag';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";
import { createBrowserHistory } from 'history';

const USERS_TAQ = gql`
query users {
    users(pageInfo : {offset : 0, limit : 50}){
      nodes{
          name
          email
      }
    }
}`;

const httpLink = createHttpLink({
    uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
    headers: {
        authorization: localStorage.getItem("TOKEN")
    }
})

export interface UsersList {
    users : {
        nodes: {
            name: string;
            email: string;
        }[];
    }
}


export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export async function queryUsers() {
    const result = await client.query<UsersList>({
        query: USERS_TAQ,
    })

    return result.data;
}