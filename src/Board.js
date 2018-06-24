import React, {Component} from 'react';
import Square from './Square';
import Repeat from './Repeat';

export default class Board extends Component {
    renderSquare(i, has = false) {
        return <Square has={has}/>;
    }

    renderVert(i) {
        return (
            <div className="board-row">
                <Repeat>
                    { (k) => this.renderSquare(k) }
                </Repeat>
            </div>
        );
    }

    render() {
        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                <Repeat>
                    { (i) => this.renderVert(i) }
                </Repeat>
            </div>
        );
    }
}
