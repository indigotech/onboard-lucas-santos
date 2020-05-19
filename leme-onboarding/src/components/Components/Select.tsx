import React from 'react';
import styled from 'styled-components';

const SelectStyled = styled.select`
    color: darkgreen;
    font-size: 1em;
    border: 3px solid darkgreen;
    border-radius: 15px;
    text-align:center;

`;

interface SelectState {
    name: string;
    onChangeFunction: any;
    values: string[];
}

interface SelectProps {
    name: string;
    onChangeFunction: any;
    values: string[];
}

export class Select extends React.Component<SelectProps, SelectState> {

    constructor (props : any) {
        super(props)

        this.state = {
            name: "",
            onChangeFunction: null,
            values: [""]
        }
    }

    componentDidMount () {
        this.setState({
            name: this.props.name,
            onChangeFunction: this.props.onChangeFunction,
            values: this.props.values

        })
    }


    render () {

        const {values} = this.state

        return (
            <div>
                <SelectStyled name={this.state.name} onChange={this.state.onChangeFunction}>
                    {values.map(function(item){
                        return (
                        <option value={item}>{item}</option>
                        )
                    })}
                </SelectStyled>
            </div>
        );
    }
}