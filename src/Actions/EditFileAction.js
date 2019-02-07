import axios from "axios";
import ActionTypes from "./ActionTypes";

export function asyncCallEditFile(data) {
    // var url = 'http://smart.nbsgroup.it/plugins/com.mattermost.server-getfilebyid'
    var url = 'https://localhost:3002/editFile'

    return function (dispatch) {
        axios.post(url, JSON.stringify(data))
            .then((result) => {
                const response = result.data.Response;
                console.log(response)
                dispatch(receivedEditResponse(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
    console.log(data)
    return function (dispatch) {
        dispatch(receivedEditResponse("ok"))
    }
   console.log(data)
    return function (dispatch) {
        dispatch(receivedEditResponse("ok"))

    }
}

export const receivedEditResponse = (obj) => ({
    type: ActionTypes.EDIT_FILE,
    payload: {
        newValue: obj
    },
});
