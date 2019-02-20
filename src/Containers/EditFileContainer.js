import { connect } from 'react-redux';
import * as actions from '../Actions/EditFileAction';
import EditFileComponent from '../Components/EditFileComponent'

const mapStateToProps = (state) => {
    return {
        responseUpdatePost : state.EditReducer.responseEdit

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleEditFile: (requestBody) => {
            dispatch(actions.asyncCallEditFile(requestBody));
        },

        closeEditFile: () => {
            dispatch(actions.closeEditFile());
        }
    }
}

const EditFileContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditFileComponent);

export default EditFileContainer
