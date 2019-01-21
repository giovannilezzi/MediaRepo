import axios from "axios";
import ActionTypes from "./ActionTypes";

export function asyncCallGetSearhFiles(requestBody) {
    var url = 'http://localhost:3002/searchFile'

    return function (dispatch) {
        axios.post(url, JSON.stringify(requestBody))
            .then((result) => {
                const response = result.data.Response;
                dispatch(receivedFiles(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}

export const receivedFiles = (obj) => ({
    type: ActionTypes.SEARCH_FILE,
    payload: {
        newValue: obj
    },
});
