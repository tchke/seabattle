import { handleActions } from 'redux-actions'
import { REVEAL_SQUARE } from '../actions/actionTypes';

function getBoardMap(){
    return [
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
    ]
}

function initState(boardMap){
    return boardMap.map((g) => {
        return g.map((v) => {
            return {
                occupied: !!v,
                open: false
            }
        });
    });
}

const initialState = initState(getBoardMap());

export default handleActions({
        [`${REVEAL_SQUARE}`]: (state, action) => {
            console.log(action.type);
            const { payload: { i, j }} = action;
            const nextState = state.map((g, gi) => {
                return g.map((v, vi) => {
                    return {
                        ...v,
                        open: v.open || gi === i && vi === j                        
                    }
                });
            });
            console.log(nextState);
            return nextState;
        }
    },
    initialState
)