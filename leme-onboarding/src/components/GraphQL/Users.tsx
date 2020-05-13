import gql from 'graphql-tag';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";

const USERS_TAQ = gql`
query UserList($offset: Int!, $limit: Int!) {
    users(pageInfo : {offset: $offset, limit: $limit}){
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

export async function queryUsers(offset: number, limit: number) {
    const result = await client.query<UsersList>({
        query: USERS_TAQ,
        variables:  {offset, limit}
    })

    return result.data;
}