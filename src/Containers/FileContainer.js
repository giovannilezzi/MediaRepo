import { connect } from 'react-redux';
import * as actionsFile from '../Actions/FileAction';
import * as deleteActionsFile from '../Actions/DeleteFileAction';

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
        },
        saveFileToEdit: (file) =>{
            dispatch(actionsFile.saveFileToEdit(file))
        }
    }
}

const FileContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FileComponent);

export default FileContainer
