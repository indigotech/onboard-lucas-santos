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

interface LabelState {
    title: string
}

export class Label extends React.Component<LabelProps, LabelState> {

constructor (props: any) {
    super(props)

    this.state = {
        title: "Label"
    }
}

componentDidMount () {
    this.setState({
        title: this.props.title
    })
}

    render (){ 
        return (
            <LabelStyled>{this.state.title}</LabelStyled>
        );
    }
}