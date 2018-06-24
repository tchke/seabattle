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
                occupied: !!v
            }
        });
    });
}

const initialState = initState(getBoardMap());

export default function(action, state = initialState) {
    return state;
}