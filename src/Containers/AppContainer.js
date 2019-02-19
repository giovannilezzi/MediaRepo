import { connect } from 'react-redux';
import * as actions from '../Actions/EditFileAction';
import AppComponent from '../Components/AppComponent'

const mapStateToProps = (state) => {
    return {
        editFileClicked: state.FileReducer.editFileClicked,
        file: state.FileReducer.file,
        previewFileClicked: state.FileReducer.previewFileClicked
    };
};

//const mapDispatchToProps = (dispatch) => {}

const AppContainer = connect(
    mapStateToProps,
    null,
)(AppComponent);

export default AppContainer
