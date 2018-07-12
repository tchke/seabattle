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

export default function(state = initialState, action) {
    return state;
}