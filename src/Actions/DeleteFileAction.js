import axios from "axios";
import ActionTypes from "./ActionTypes";

export function asyncCallDeleteFile(data) {
    var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-dbdeletefile'
    //var url = 'http://localhost:3002/deleteFile'

    return function (dispatch) {
        axios.post(url, JSON.stringify(data))
            .then((result) => {
                const response = result.data.Response;
                console.log(response)
                dispatch(receivedDeleteResponse(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
    console.log(data)
    return function (dispatch) {
        dispatch(receivedDeleteResponse("ok"))
    }
}

    export const receivedDeleteResponse = (obj) => ({
    type: ActionTypes.DELETE_FILE,
    payload: {
        newValue: obj
    },
});
