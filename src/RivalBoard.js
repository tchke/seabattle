import { connect } from 'react-redux';
import Board from "./Board";

const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps)(Board);