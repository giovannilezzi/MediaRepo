/*
non usato da nessuno
 */

import { connect } from 'react-redux';
import * as actions from '../Actions/AllFileAction';
import ListImage from "../Components/ListImage";

const mapStateToProps = (state) => {
    return {
        isLoading: state.ImagesReducer.isLoading,
        listFiles: state.ImagesReducer.listFiles
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncCallAllFiles: (divId) => {
            dispatch(actions.asyncCallAllFiles(divId));
        }
    }
}

const ListImageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListImage);

export default ListImageContainer
