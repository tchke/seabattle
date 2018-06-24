import { connect } from 'react-redux';
import Board from "./Board";

const mapStateToProps = (state) => {
    return {
        boardMap: state.rivalBoard
    };
};

export default connect(mapStateToProps)(Board);
