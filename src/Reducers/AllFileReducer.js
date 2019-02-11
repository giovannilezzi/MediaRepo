import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    isLoading: true,
    listFiles: [],
    id: null,
    allFilesLoaded: false
}

const AllFileReducer = (state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.RECEIVED_ALL_FILES:
            return { ...state, listFiles: action.payload.newValue, isLoading: false, allFilesLoaded: true};

        case ActionTypes.EDIT_FILE:
            return { ...state, allFilesLoaded: false}

            case ActionTypes.DELETE_FILE:
            return { ...state, allFilesLoaded: false};
        default:
            return state;
    }
}

export default AllFileReducer
