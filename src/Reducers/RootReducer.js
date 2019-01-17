import { combineReducers } from 'redux';
import UploadFileReducer from './UploadFileReducer'
import AllFileReducer from './AllFileReducer'
import FileReducer from './FileReducer'

const RootReducer = combineReducers({
    MediaRepoReducer: UploadFileReducer,
    ImagesReducer: AllFileReducer,
    FileReducer
});
export default RootReducer
