import { handleActions } from 'redux-actions'
import { REVEAL_SQUARE } from '../actions/actionTypes';
import { NAME_OF_FIRST_BOARD, NAME_OF_SECOND_BOARD } from '../constants'

function getBoardMap() {
    return [
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
}

function initBoard(map) {
    return map.map((g) => {
        return g.map((v) => {
            return {
                occupied: !!v,
                open: false
            }
        });
    })
}

function initState(...boards) {
    return boards
}

const initialState = {
    [NAME_OF_FIRST_BOARD]: initBoard(getBoardMap()),
    [NAME_OF_SECOND_BOARD]: initBoard(getBoardMap())
}

console.log(initialState);

export default handleActions({
    [REVEAL_SQUARE]: (state, action) => {
        console.log(action);
        const { payload: { i, j, boardName } } = action;
        const nextState = {
            ...state,
            [boardName]: state[boardName].map((g, gi) => {
                return g.map((v, vi) => {
                    return {
                        ...v,
                        open: v.open || gi === i && vi === j
                    }
                });
            })
        }
        console.log(nextState);
        return nextState;
    }
}, initialState)