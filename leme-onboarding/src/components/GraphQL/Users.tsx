import gql from 'graphql-tag';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";

const USERS_TAQ = gql`
query UserList($offset: Int!, $limit: Int!) {
    users(pageInfo : {offset: $offset, limit: $limit}){
      nodes{
          id
          name
          email
      }
      pageInfo {
          limit
          hasNextPage
          hasPreviousPage
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
            id: string;
            name: string;
            email: string;
        }[];
        pageInfo: {
            limit: number;
            hasNextPage: boolean;
            hasPreviousPage: boolean;}
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