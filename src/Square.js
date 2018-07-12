import React, { Component } from 'react';
import classNames from 'classnames';

export default class Square extends Component {

    render() {
        const { has, open } = this.props;
        const name = open && has ? 'red' : 'grey';
        const className = classNames('square', name);
        return (
            <button className={className} onClick={this.handleClick}>
                {/* TODO */}
            </button>
        );
    }

}
