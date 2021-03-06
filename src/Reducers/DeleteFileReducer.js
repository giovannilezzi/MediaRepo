import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    responseDelete: null
}

const DeleteFileReducer = (state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.DELETE_FILE:
            return { ...state, responseDelete: action.payload.newValue};

        default:
            return state;
    }
}

export default DeleteFileReducer
