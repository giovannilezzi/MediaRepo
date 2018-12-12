import ActionTypes from "../Actions/ActionTypes";

const initialState = {
    isLoading: true,
    listFiles: []
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
