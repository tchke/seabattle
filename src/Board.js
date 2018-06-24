import React, {Component} from 'react';

import Square from './Square';
import Repeat from './Repeat';

export default class Board extends Component {
    renderSquare(i, has = false) {
        return <Square has={has}/>;
    }

    renderRow(i, rowMap) {
        return (
            <div className="board-row">
                <Repeat>
                    { (k) => this.renderSquare(k, rowMap[k].occupied) }
                </Repeat>
            </div>
        );
    }

    render() {
        const { boardMap } = this.props;

        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                <Repeat>
                    { (i) => this.renderRow(i, boardMap[i]) }
                </Repeat>
            </div>
        );
    }
}

