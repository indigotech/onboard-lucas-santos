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
    border: 3px solid ${props => props.errorColor};
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
    onChangeFunction: any;
    validationFunction?: any;
}

interface FormState {
    value: string;
    errorColor: string;
}

export class Form extends React.Component<FormProps, FormState> {

    constructor(props: FormProps) {
        super (props)

        this.state = {
            value: "",
            errorColor: "green"
        }
    }

    private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        this.setState({
            value: value
        });

        const error = this.props.validationFunction(value);

        console.log(error);
        console.log(this.state.value)

        if (error === 0) {
            this.setState({
                errorColor: "green"
            })
        }
        else {
            this.setState({
                errorColor: "red"
            })
        }

        this.props.onChangeFunction(e)
    };


    render () {
        return (
            <div>
                <Label title={this.props.title} />
                <Input type={this.props.type} name={this.props.name} placeHolder={this.props.placeHolder} onChange={this.handleChange} errorColor={this.state.errorColor}/>
            </div>
        );
    }
}