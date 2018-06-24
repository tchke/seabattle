import React, { Component } from 'react';

import OwnBoard from './OwnBoard';
import RivalBoard from './RivalBoard';

export default class Game extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <OwnBoard />
                </div>

                <div className="game-board">
                    <RivalBoard />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
