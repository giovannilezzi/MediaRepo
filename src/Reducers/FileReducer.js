import ActionTypes from "../Actions/ActionTypes";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import PreviewContainer from "../Containers/PreviewContainer";
import React from "react";
import ReactDOM from "react-dom";

const initialState = {
    isLoading: true,
    file: null,
}

const FileReducer = (state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.RECEIVED_FILE:
            ReactDOM.render(
                <Provider store={store}>
                    <div>
                        <PreviewContainer/>
                    </div>
                </Provider>,
                document.getElementById('page'),
            );
            return { ...state, file: action.payload.newValue, isLoading: false};

        default:
            return state;
    }
}

export default FileReducer
