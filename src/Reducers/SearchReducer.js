import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    searchFileResponse: [],
    isSearching: false
}

const SearchReducer = (state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.SEARCH_FILE:

            return { ...state, searchFileResponse: action.payload.newValue, isSearching: true};

        default:
            return state;
    }
}

export default SearchReducer
