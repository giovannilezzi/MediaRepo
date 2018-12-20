import axios from "axios";
import ActionTypes from "./ActionTypes";

export function asyncCallAllImages(divId) {
    var url = 'http://smart.nbsgroup.it/plugins/com.mattermost.server-getfilesbychannel '
    //'http://smart.nbsgroup.it/plugins/com.mattermost.server-getfilename'
    //'http://localhost:3002/getImage'
    //'http://smart.nbsgroup.it/plugins/com.mattermost.server-dblistimage'
    //'http://172.18.50.67:8065/plugins/com.mattermost.server-dblistimage'
    //http://localhost:3001/getImage
    var requestBody = {
        Channel: divId
    }
    console.log(JSON.stringify(requestBody))
    return function (dispatch) {
        axios.post(url, JSON.stringify(requestBody))
            .then((result) => {
                const response = result.data.Response;
                console.log(response)
                dispatch(receivedImages(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}

export const receivedImages = (obj) => ({
    type: ActionTypes.RECEIVED_IMAGES,
    payload: {
        newValue: obj
    },
});
