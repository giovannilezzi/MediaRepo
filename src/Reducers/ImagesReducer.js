import ActionTypes from "../Actions/ActionTypes";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import PreviewContainer from "../Containers/PreviewContainer";
import React from "react";
import ReactDOM from "react-dom";

const initialState = {
    isLoading: true,
    listFiles: [],
    file: null
}

const ImagesReducer = (state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.RECEIVED_IMAGES:
            state.ListFiles = []
            return { ...state, listFiles: state.listFiles.concat(action.payload.newValue), isLoading: false};

        case ActionTypes.SAVE_ID:
            ReactDOM.render(
                <Provider store={store}>
                    <div>
                        <PreviewContainer/>
                    </div>
                </Provider>,
                document.getElementById('root'),
            );
            return {...state, file: action.payload.newValue}

        default:
            return state;
    }
}

export default ImagesReducer
