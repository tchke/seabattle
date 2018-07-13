import React, {Component} from 'react';

import Square from './Square';
import Repeat from './Repeat';

export default class Board extends Component {
    renderSquare(i, j, has = false, open = false) {
        return <Square
            has={has}
            open={open}
            i={i}
            j={j}
            onClick={ this.handleSquareClick }/>;
    }

    handleSquareClick = (i,j) => {
        const { onSquareClick } = this.props;
        onSquareClick(i,j);
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
        const { boardMap, title } = this.props;

        return (
            <div>
                { title && <div className="status">{title}</div> }
                <Repeat>
                    { (i) => this.renderRow(i, boardMap[i]) }
                </Repeat>
            </div>
        );
    }
}

