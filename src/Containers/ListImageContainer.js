import { connect } from 'react-redux';
import * as actions from '../Actions/ImagesAction';
import ListImage from "../Components/ListImage";

const mapStateToProps = (state) => {
    return {
        isLoading: state.ImagesReducer.isLoading,
        listFiles: state.ImagesReducer.listFiles
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncCallAllImages: (divId) => {
            dispatch(actions.asyncCallAllImages(divId));
        }
    }
}

const ListImageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListImage);

export default ListImageContainer
