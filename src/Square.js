import React, { Component } from 'react';
import classNames from 'classnames';

export default class Square extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    handleClick = (e) => {
        this.setState({exposed: true});
    };

    render() {
        const { has } = this.props;
        const name = has ? 'red' : 'grey';
        const className = classNames('square', name);
        return (
            <button className={className} onClick={this.handleClick}>
                {/* TODO */}
            </button>
        );
    }
}
