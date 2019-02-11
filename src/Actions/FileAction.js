import axios from "axios";
import ActionTypes from "./ActionTypes";

export function AsyncCallGetFileById(id) {
   var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-dbgetfilebyid'
    //'http://smart.nbsgroup.it/plugins/com.mattermost.server-dbgetimagebyid'
    // var url = 'http://localhost:3002/getFileById'
    //'http://smart.nbsgroup.it/plugins/com.mattermost.server-dblistimage'
    //'http://172.18.50.67:8065/plugins/com.mattermost.server-dblistimage'
    //http://localhost:3001/getImage
    var requestBody = {
        Id:id
    }
    return function (dispatch) {
        axios.post(url, JSON.stringify(requestBody))
            .then((result) => {
                const response = result.data.Response;
             //   console.log(response)
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
