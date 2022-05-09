import React, { Component } from 'react';
import './neon-button.scss';

interface IProps {
    href: string,
    color: string,
    target?: string | undefined,
    label?: string | undefined,
}

interface IState {
    target: string;
    label: string;
}

class NeonButton extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            target: props.target,
            label: props.label,
        };
        if (props.target === "" || props.target === undefined) {
            this.state.target = "_blank";
        }
        if (props.label === "" || props.label === undefined) {
            this.state.label = "Click Me";
        }
    }

    render() {
        return (
            <div className="neon-button__container">
                <a href={this.props.href} className={`neon-button__button btn-color-${this.props.color}`}>{this.state.label}</a>
            </div>
        );
    }
}

export default NeonButton;