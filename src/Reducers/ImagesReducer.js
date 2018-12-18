import ActionTypes from "../Actions/ActionTypes";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import PreviewContainer from "../Containers/PreviewContainer";
import React from "react";
import ReactDOM from "react-dom";

const initialState = {
    isLoading: true,
    listFiles: [],
    id: null
}

const ImagesReducer = (state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.RECEIVED_IMAGES:
            state.ListFiles = []
            return { ...state, listFiles: state.listFiles.concat(action.payload.newValue), isLoading: false};

        default:
            return state;
    }
}

export default ImagesReducer
