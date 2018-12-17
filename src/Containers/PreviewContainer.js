import { connect } from 'react-redux';
import Preview from "../Components/Preview";

const mapStateToProps = (state) => {
    return {
        file: state.ImagesReducer.file
    };
};

const PreviewContainer = connect(
    mapStateToProps,
    null,
)(Preview);

export default PreviewContainer
