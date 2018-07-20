import React, { Component } from 'react';
import { NAME_OF_FIRST_BOARD, NAME_OF_SECOND_BOARD } from '../constants';
import Dashboard from './Dashboard';
// import OwnBoard from './OwnBoard';
// import RivalBoard from './RivalBoard';

export default class Game extends Component {
    render() {
        return (
            <div className='game'>
                <Dashboard rivalBoardName={NAME_OF_FIRST_BOARD} ownBoardName={NAME_OF_SECOND_BOARD}/>
                <Dashboard rivalBoardName={NAME_OF_SECOND_BOARD} ownBoardName={NAME_OF_FIRST_BOARD} />
            </div>
        );
    }
}
