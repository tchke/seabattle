import { connect } from 'react-redux';
import Board from "../components/Board";
import { revealSquare } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        boardMap: state.rivalBoard
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSquareClick: (i, j) => {
            dispatch(revealSquare(i,j))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
