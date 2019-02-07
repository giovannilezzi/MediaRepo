import axios from "axios";
import ActionTypes from "./ActionTypes";

export function asyncCallAllFiles(divId) {
    var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-getfilesbychannel '
    //'http://smart.nbsgroup.it/plugins/com.mattermost.server-getfilename'
    //'http://localhost:3002/getImage'
    //'http://smart.nbsgroup.it/plugins/com.mattermost.server-dblistimage'
    //'http://172.18.50.67:8065/plugins/com.mattermost.server-dblistimage'
    //http://localhost:3001/getImage
    var requestBody = {
        Channel: divId
    }
    return function (dispatch) {
        axios.post(url, JSON.stringify(requestBody))
            .then((result) => {
                const response = result.data.Response;
                dispatch(receivedAllFiles(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}

export const receivedAllFiles = (obj) => ({
    type: ActionTypes.RECEIVED_ALL_FILES,
    payload: {
        newValue: obj
    },
});
