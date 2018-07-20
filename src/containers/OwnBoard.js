import { connect } from 'react-redux';
import Board from "../components/Board";
import { revealSquare } from '../actions/actions';

const mapStateToProps = (state, { boardName }) => {
    return {
        boardMap: state.game[boardName]
    };
};
const mapDispatchToProps = (dispatch, { boardName }) => {
    return {
        onSquareClick: (i, j) => {
            dispatch(revealSquare(i,j,boardName))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Board);
