import React from 'react'
import styled from 'styled-components';
import { Label } from './Label';

const Input = styled.input.attrs(props => ({
    // we can define static props
    type: props.type,
  
    // or we can define dynamic ones
    size: props.size || "0.1em",
  }))`
    color: darkgreen;
    font-size: 1em;
    border: 3px solid darkgreen;
    border-radius: 15px;
    text-align:center;
  
    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;

interface FormProps {
    title: string;
    type: string;
    name: string;
    placeHolder?: string;
    onChangeFunction: any
}

export class Form extends React.Component<FormProps, {}> {

    render () {
        return (
            <div>
                <Label title={this.props.title}/>
                <Input type={this.props.type} name={this.props.name} placeHolder={this.props.placeHolder} onChange={this.props.onChangeFunction}/>
            </div>
        );
    }
}