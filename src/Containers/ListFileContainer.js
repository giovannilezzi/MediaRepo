import { connect } from 'react-redux';
import * as actionsFile from '../Actions/FileAction';
import * as actionsImage from '../Actions/ImagesAction';

import ListFile from "../Components/ListFile";

const mapStateToProps = (state) => {
    return {
        isLoading: state.ImagesReducer.isLoading,
        listFiles: state.ImagesReducer.listFiles,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncCallAllImages: (divId) => {
            dispatch(actionsImage.asyncCallAllImages(divId));
        },

        AsyncCallGetFileById: (id) => {
            dispatch(actionsFile.AsyncCallGetFileById(id));
        }
    }
}

const ListFileContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListFile);

export default ListFileContainer
