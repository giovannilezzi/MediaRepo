import { connect } from 'react-redux';
import * as actionsFile from '../Actions/FileAction';

import FileComponent from "../Components/FileComponent";



const mapDispatchToProps = (dispatch) => {
    return {
        AsyncCallGetFileById: (id) => {
            dispatch(actionsFile.AsyncCallGetFileById(id));
        }
    }
}

const FileContainer = connect(
    null,
    mapDispatchToProps,
)(FileComponent);

export default FileContainer
