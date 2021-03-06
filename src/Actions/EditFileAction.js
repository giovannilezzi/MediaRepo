import axios from "axios";
import ActionTypes from "./ActionTypes";

export function asyncCallEditFile(data) {
    var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-dbeditfile'
    //var url = 'http://localhost:3002/editFile'

    return function (dispatch) {
        axios.post(url, JSON.stringify(data))
            .then((result) => {
                const response = result.data.Response;
                dispatch(receivedEditResponse(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
    return function (dispatch) {
        dispatch(receivedEditResponse("ok"))
    }
}

export const receivedEditResponse = (obj) => ({
    type: ActionTypes.EDIT_FILE,
    payload: {
        newValue: obj
    },
})
export const closeEditFile = () => ({
    type: ActionTypes.CLOSE_FILE,
})

