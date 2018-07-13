import React, { Component } from 'react';
import classNames from 'classnames';

export default class Square extends Component {
    handleClick = () => {
        const { onClick, i, j } = this.props;
        console.log(`clicked on ${i} ${j}`);
        onClick(i,j);
    }

    render() {
        const { has, open } = this.props;
        const name = open ? has ? 'red' : 'white' : 'grey';
        const className = classNames('square', name);
        return (
            <button className={className} onClick={this.handleClick}>
                {/* TODO */}
            </button>
        );
    }

}
