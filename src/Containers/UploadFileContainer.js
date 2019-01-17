import { connect } from 'react-redux';
import * as actions from '../Actions/UploadFileAction';
import UploadFileComponent from "../Components/UploadFileComponent";

const mapStateToProps = (state) => {
    return{
        files: state.UploadFileReducer.files,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFileSelect: (evt, divId) => {
            dispatch(actions.handleFileSelect(evt, divId))
        }
    }
}

const UploadFileContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UploadFileComponent);

export default UploadFileContainer
