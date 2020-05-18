import React from 'react';

interface buttonState {
    title: string;
    onClickFunction: any
}

interface buttonProps {
    title: string;
    onClickFunction: any;
}

export class Button extends React.Component<buttonProps,buttonState> {

    constructor(props: any) {
        super(props)

        this.state = {
            title: "button",
            onClickFunction: null
        }
    }

    componentDidMount() {
        this.setState({
            title: this.props.title,
            onClickFunction: this.props.onClickFunction
        })
    }

    render () {
        return (
            <button onClick={this.state.onClickFunction}>{this.state.title}</button>
        );
    }
}