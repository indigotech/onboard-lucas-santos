import React from 'react'

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
                <input type={this.state.type} name={this.state.name} onChange={this.state.onChangeFunction}/>
            </div>
        );
    }
}