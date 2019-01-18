import { connect } from 'react-redux';
import * as actionsFile from '../Actions/FileAction';
import * as deleteActionsFile from '../Actions/DeleteAction';

import FileComponent from "../Components/FileComponent";


const mapStateToProps = (state) => {
    return {
        responseDelete: state.DeleteReducer.responseDelete
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AsyncCallGetFileById: (id) => {
            dispatch(actionsFile.AsyncCallGetFileById(id));
        },
        deleteFile: (requestBody) =>{
            dispatch(deleteActionsFile.asyncCallDeleteFile(requestBody))
        }
    }
}

const FileContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FileComponent);

export default FileContainer
