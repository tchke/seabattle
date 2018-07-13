import React, {Component} from 'react';

import Square from './Square';
import Repeat from './Repeat';

export default class Board extends Component {
    renderSquare(i, j, has = false, open = false) {
        const { onSquareClick } = this.props;
        
        return <Square has={has} open={open} onClick={ () => onSquareClick(i,j) }/>;
    }

    renderRow(r, rowMap) {
        return (
            <div className="board-row">
                <Repeat>
                    { (k) => this.renderSquare(r, k, rowMap[k].occupied, rowMap[k].open) }
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

