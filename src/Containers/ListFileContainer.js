import { connect } from 'react-redux';
import * as actionsFile from '../Actions/FileAction';
import * as actionsImage from '../Actions/AllFileAction';

import ListFileComponent from "../Components/ListFileComponent";

const mapStateToProps = (state) => {
    return {
        isLoading: state.AllFileReducer.isLoading,
        listFiles: state.AllFileReducer.listFiles,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncCallAllFiles: (divId) => {
            dispatch(actionsImage.asyncCallAllFiles(divId));
        }
    }
}

const ListFileContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListFileComponent);

export default ListFileContainer
