import axios from "axios";
import ActionTypes from "./ActionTypes";

export function asyncCallAllImages() {
    var url = 'http://smart.nbsgroup.it/plugins/com.mattermost.server-dblistimage'
    //'http://172.18.50.67:8065/plugins/com.mattermost.server-dblistimage'
    //http://localhost:3001/getImage
    return function (dispatch) {
        axios.get(url)
            .then((result) => {
                const obj = []
                const response = result.data.Response;
                dispatch(receivedImages(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}

export const saveFile = (obj) => (
    {
    type: ActionTypes.SAVE_ID,
    payload: {
        newValue: obj
    },
})


export const receivedImages = (obj) => ({
    type: ActionTypes.RECEIVED_IMAGES,
    payload: {
        newValue: obj
    },
});
