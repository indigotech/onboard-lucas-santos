import React from 'react';
import { stringify } from 'querystring';
import { queryUsers } from '../GraphQL/Users';

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
            values: ["a"]
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
                <select name={this.state.name} onChange={this.state.onChangeFunction}>
                    {values.map(function(item){
                        return (
                        <option value={item}>{item}</option>
                        )
                    })}
                </select>
            </div>
        );
    }
}