import ActionTypes from "../Actions/ActionTypes";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import PreviewContainer from "../Containers/PreviewContainer";
import React from "react";
import ReactDOM from "react-dom";

const initialState = {
    isLoading: true,
    file: null,
    editFileClicked: false,
    previewFileClicked: false
}

const FileReducer = (state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.RECEIVED_FILE:
            /*ReactDOM.render(
                <Provider store={store}>
                    <div>
                        <PreviewContainer/>
                    </div>
                </Provider>,
                document.getElementById('root'),
            );*/
            return { ...state, file: action.payload.newValue, isLoading: false, previewFileClicked: true};

        case ActionTypes.SAVE_FILE_TO_EDIT:
            return { ...state, editFileClicked: true, file: action.payload.newValue};

        case ActionTypes.EDIT_FILE:
            return { ...state, editFileClicked: false}

        case ActionTypes.CLOSE_FILE:
            return { ...state, editFileClicked: false, previewFileClicked: false}

        default:
            return state;
    }
}

export default FileReducer
