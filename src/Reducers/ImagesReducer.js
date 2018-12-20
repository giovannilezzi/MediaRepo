import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    isLoading: true,
    listFiles: [],
    id: null
}

const ImagesReducer = (state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.RECEIVED_IMAGES:
            return { ...state, listFiles: action.payload.newValue, isLoading: false};

        default:
            return state;
    }
}

export default ImagesReducer
