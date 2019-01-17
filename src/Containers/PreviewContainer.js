import { connect } from 'react-redux';
import PreviewComponent from "../Components/PreviewComponent";

const mapStateToProps = (state) => {
    return {
        file: state.FileReducer.file,
        isLoading: state.FileReducer.isLoading

    };
};

const PreviewContainer = connect(
    mapStateToProps,
    null,
)(PreviewComponent);

export default PreviewContainer
