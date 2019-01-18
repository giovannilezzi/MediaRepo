import ActionTypes from "../Actions/ActionTypes";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../Store/AppStore";
import ListFileContainer from '../Containers/ListFileContainer'

const initialState = {
    responseEdit: null
}

const EditFileReducer = (state = initialState , action) => {
    switch (action.type) {

        case ActionTypes.EDIT_FILE:
            ReactDOM.render(
                <Provider store={store}>
                    <div>
                        <ListFileContainer/>
                    </div>
                </Provider>,
                document.getElementById('page'),
            );
            return { ...state, responseEdit: action.payload.newValue};

        default:
            return state;
    }
}

export default EditFileReducer
