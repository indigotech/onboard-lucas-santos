import React from 'react'
import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
    // we can define static props
    type: props.type,
  
    // or we can define dynamic ones
    size: props.size || "0.1em",
  }))`
    color: lightgree;
    font-size: 1em;
    border: 3px solid darkgreen;
    border-radius: 15px;
  
    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;

interface FormState{
    type: string;
    name: string;
    onChangeFunction: any
}

interface FormProps {
    type: string;
    name: string;
    onChangeFunction: any
}

export class Form extends React.Component<FormProps, FormState> {

    constructor (props: any) {
        super(props)

        this.state = {
            type: "",
            name: "",
            onChangeFunction: null
        }
    }

    componentDidMount () {
        this.setState({
            type: this.props.type,
            name: this.props.name,
            onChangeFunction: this.props.onChangeFunction
        })
    }

    render () {
        return (
            <div>
                <Input type={this.state.type} name={this.state.name} onChange={this.state.onChangeFunction}/>
            </div>
        );
    }
}