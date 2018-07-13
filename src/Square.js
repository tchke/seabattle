import React, { Component } from 'react';
import classNames from 'classnames';

export default class Square extends Component {
    handleClick = () => {
        const { onClick } = this.props;
        console.log('clicked');
        onClick();
    }

    render() {
        const { has, open, onClick } = this.props;
        const name = open ? has ? 'red' : 'white' : 'grey';
        const className = classNames('square', name);
        return (
            <button className={className} onClick={this.handleClick}>
                {/* TODO */}
            </button>
        );
    }

}
