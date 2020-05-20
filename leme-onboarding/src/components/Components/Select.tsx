import React from 'react';
import styled from 'styled-components';
import { Label } from './Label';

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
    title: string;
    name: string;
    onChangeFunction: any;
    values: string[];
}

export class Select extends React.Component<SelectProps, {}> {

    render () {

        const {values} = this.props

        return (
            <div>
                <Label title={this.props.title}/>
                <SelectStyled name={this.props.name} onChange={this.props.onChangeFunction}>
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