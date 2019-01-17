import { combineReducers } from 'redux';
import UploadFileReducer from './UploadFileReducer'
import AllFileReducer from './AllFileReducer'
import FileReducer from './FileReducer'

const RootReducer = combineReducers({
    UploadFileReducer,
    AllFileReducer,
    FileReducer
});
export default RootReducer
