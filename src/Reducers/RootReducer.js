import { combineReducers } from 'redux';
import UploadFileReducer from './UploadFileReducer'
import AllFileReducer from './AllFileReducer'
import FileReducer from './FileReducer'
import DeleteReducer from './DeleteReducer'


const RootReducer = combineReducers({
    UploadFileReducer,
    AllFileReducer,
    FileReducer,
    DeleteReducer
});
export default RootReducer
