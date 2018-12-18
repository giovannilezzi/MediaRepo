import { connect } from 'react-redux';
import Preview from "../Components/Preview";

const mapStateToProps = (state) => {
    return {
        file: state.FileReducer.file,
        isLoading: state.FileReducer.isLoading

    };
};

const PreviewContainer = connect(
    mapStateToProps,
    null,
)(Preview);

export default PreviewContainer
