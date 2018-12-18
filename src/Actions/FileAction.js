import axios from "axios";
import ActionTypes from "./ActionTypes";

export function AsyncCallGetFileById(id) {
    var url = 'http://smart.nbsgroup.it/plugins/com.mattermost.server-dbgetimagebyid'
    //'http://localhost:3002/getImageById'
    //'http://smart.nbsgroup.it/plugins/com.mattermost.server-dblistimage'
    //'http://172.18.50.67:8065/plugins/com.mattermost.server-dblistimage'
    //http://localhost:3001/getImage
    var requestBody = {
        Id:id
    }
    console.log(JSON.stringify(requestBody))
    return function (dispatch) {
        axios.post(url, JSON.stringify(requestBody))
            .then((result) => {
                const response = result.data.Response;
                console.log(response)
                dispatch(receivedFile(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}

export const receivedFile = (obj) => ({
    type: ActionTypes.RECEIVED_FILE,
    payload: {
        newValue: obj
    },
});
