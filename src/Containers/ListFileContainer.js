import { connect } from 'react-redux';
import * as actions from '../Actions/ImagesAction';
import ListFile from "../Components/ListFile";

const mapStateToProps = (state) => {
    return {
        isLoading: state.ImagesReducer.isLoading,
        listFiles: state.ImagesReducer.listFiles
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncCallAllImages: () => {
            dispatch(actions.asyncCallAllImages());
        }
    }
}

const ListImageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListFile);

export default ListImageContainer
