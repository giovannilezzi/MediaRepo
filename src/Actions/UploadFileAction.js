import ActionTypes from "./ActionTypes";
import axios from "axios";
import $ from "jquery";


export const receivedResponse = (obj) => ({
    type: ActionTypes.RECEIVED_RESPONSE,
    payload: {
        newValue: obj
    },
});
/*
non serve
 */
export const file = (obj) => ({
    type: ActionTypes.FILE,
    payload: {
        newValue: obj
    },
});

export function handleFileSelect(evt, divId) {
    var f = evt.target.files[0]; // FileList object
    return function (dispatch) {
        getBase64(f).then(
            data => {
                var str = data
                dispatch(file(data))
                str = str.substring(str.indexOf(",") + 1);
                var mimeType = data;
                mimeType = mimeType.substring(0, mimeType.indexOf(",")) + ",";
                var requestBody = {
                    Name:f.name,
                    File: str,
                    MimeType: mimeType,
                    Channel: divId
                }
                var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-savefile'
                //'http://localhost:3002/saveImage'
                axios.post(url, JSON.stringify(requestBody))
                    .then((result) => {
                        const response = result.data;
                        const obj = response.Response
                        dispatch(receivedResponse(obj))
                    })
                    .catch((err) => {
                        console.log("Errore: " + err.response.data)
                    })
            }
        );
    }
}

function getBase64 (file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            var str = reader.result
            str = str.substring(str.indexOf(",") + 1);
            resolve(reader.result)};
        reader.onerror = error => reject(error);
    });
}
