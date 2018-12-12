import axios from "axios";
import ActionTypes from "./ActionTypes";

export function asyncCallAllImages() {
    var url = 'http://localhost:3001/getImage'
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


export const receivedImages = (obj) => ({
    type: ActionTypes.RECEIVED_IMAGES,
    payload: {
        newValue: obj
    },
});
