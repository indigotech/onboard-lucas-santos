import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: inline-block;
  color: lightgreen;
  font-size: 1em;
  margin: 0.7em;
  padding: 0.1em 3em;
  border: 2px solid lightgreen;
  border-radius: px;
  display: block;
`;

interface buttonState {
    title: string;
    disabled?: boolean;
    onClickFunction: any
}

interface buttonProps {
    title: string;
    disabled?: boolean;
    onClickFunction: any;
}

export class Button extends React.Component<buttonProps,buttonState> {

    constructor(props: any) {
        super(props)

        this.state = {
            title: "button",
            disabled: false,
            onClickFunction: null
        }
    }

    componentDidMount() {
        this.setState({
            title: this.props.title,
            disabled: this.props.disabled,
            onClickFunction: this.props.onClickFunction
        })
    }

    render () {
        return (
            <ButtonStyled onClick={this.state.onClickFunction} disabled={this.state.disabled}>{this.state.title}</ButtonStyled>
        );
    }
}