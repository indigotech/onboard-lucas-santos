import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: lightgreen;
`;

export class Welcome extends React.Component {
    render() {
        return <Title>Bem-vindo(a) à Taqtile!</Title>
    }
}