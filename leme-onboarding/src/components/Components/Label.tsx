import React from 'react';
import styled from 'styled-components';

const LabelStyled = styled.label`
  font-size: 1em;
  text-align: center;
  color: lightgreen;
`;

interface LabelProps {
    title: string
}

export class Label extends React.Component<LabelProps, {}> {

    render (){ 
        return (
            <LabelStyled>{this.props.title}</LabelStyled>
        );
    }
}