import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './Board';

class Game extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>

                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    state
}

export default connect(mapStateToProps(), null)(Game);
