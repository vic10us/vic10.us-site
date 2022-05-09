import React, { Component } from 'react';
import './social-button.scss';

interface IProps {
    href: string,
    icon: string,
    target?: string | undefined,
    label?: string | undefined,
}

interface IState {
    target: string;
    label: string;
}

class SocialButton extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = { target: props.target };
        if (props.target === "" || props.target === undefined) {
            this.state.target = "_blank";
        }
        if (props.label === "" || props.label === undefined) {
            this.state.label = this.props.icon.replace(/(.*)-.*/,'$1');
        }
    }

    render() {
        return (
            <span className="social-button__root">
                <a data-label={this.state.label} className={`social-button__box ${this.props.icon}`} href={this.props.href} target={this.state.target} rel="noreferrer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className={`fab fa-${this.props.icon}`}></span>
                </a>
                <div className={`social-button__label ${this.props.icon}`}>
                    {this.state.label}
                </div>
            </span>
        );
    }
}

export default SocialButton;