import gql from 'graphql-tag';
import { createBrowserHistory } from 'history';
import {client} from './Client';


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


export const history = createBrowserHistory({forceRefresh:true});

/**
 * Mutation login
 * 
 * @param {string} email 
 * @param {string} password 
 */

export async function mutateLogin (email: string, password: string) {
    const result =  await client.mutate({
            mutation: LOGIN_TAQ,
            variables : {
                data: { email, password }
            },
            fetchPolicy: "no-cache",
        })

    return result.data?.login.token;
}

/**
 * Saves login token
 * 
 * @param {string} token 
 */

export function saveToken (token: string) {
    localStorage.setItem("TOKEN", token);

    history.push("/home");
}