import { connect } from 'react-redux';
import * as actions from '../Actions/MediaRepoAction';
import MediaRepo from "../Components/MediaRepo";

const mapStateToProps = (state) => {
    return{
        files: state.MediaRepoReducer.files,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFileSelect: (evt, divId) => {
            dispatch(actions.handleFileSelect(evt, divId))
        }
    }
}

const MediaRepoContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MediaRepo);

export default MediaRepoContainer
