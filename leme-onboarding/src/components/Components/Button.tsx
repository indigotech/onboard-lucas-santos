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
    disabled?: boolean;
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
            disabled: false,
        }
    }

    componentDidMount() {
        this.setState({
            disabled: this.props.disabled,
        })
    }

    componentWillReceiveProps () {
        this.setState ({
            disabled: this.props.disabled
        })
    }

    render () {
        return (
            <ButtonStyled onClick={this.props.onClickFunction} disabled={this.state.disabled}>{this.props.title}</ButtonStyled>
        );
    }
}