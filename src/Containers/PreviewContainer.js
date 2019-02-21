import { connect } from 'react-redux';
import PreviewComponent from "../Components/PreviewComponent";
import * as actions from "../Actions/PreviewAction";

const mapStateToProps = (state) => {
    return {
        file: state.FileReducer.file,
        isLoading: state.FileReducer.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeFile: () => {
            dispatch(actions.closeFile());
        },
    }
}

const PreviewContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PreviewComponent);

export default PreviewContainer
