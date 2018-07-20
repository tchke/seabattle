import React, { Component } from 'react';

import OwnBoard from './OwnBoard';
import RivalBoard from './RivalBoard';

export default class Dashboard extends Component {
    render() {
        const { rivalBoardName, ownBoardName } = this.props;

        return (
            <div className="dashboard">
                <div className="game-board">
                    <RivalBoard boardName={rivalBoardName}/>
                </div>

                <div className="game-board">
                    <OwnBoard boardName={ownBoardName}/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}