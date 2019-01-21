import { connect } from 'react-redux';
import * as actionsFile from '../Actions/AllFileAction';
import * as actionSearch from '../Actions/SerachFile';

import ListFileComponent from "../Components/ListFileComponent";

const mapStateToProps = (state) => {
    return {
        isLoading: state.AllFileReducer.isLoading,
        listFiles: state.AllFileReducer.listFiles,
        searchFileResponse: state.SearchReducer.searchFileResponse,
        isSearching: state.SearchReducer.isSearching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncCallAllFiles: (divId) => {
            dispatch(actionsFile.asyncCallAllFiles(divId));
        },
        searchFile: (requestBody) => {
            dispatch(actionSearch.asyncCallGetSearhFiles(requestBody))
        }
    }
}

const ListFileContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListFileComponent);

export default ListFileContainer
