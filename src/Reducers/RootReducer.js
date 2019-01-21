import { combineReducers } from 'redux';
import UploadFileReducer from './UploadFileReducer'
import AllFileReducer from './AllFileReducer'
import FileReducer from './FileReducer'
import DeleteFileReducer from './DeleteFileReducer'
import EditFileReducer from './EditFileReducer'
import SearchReducer from './SearchReducer'




const RootReducer = combineReducers({
    UploadFileReducer,
    AllFileReducer,
    FileReducer,
    DeleteReducer: DeleteFileReducer,
    EditReducer: EditFileReducer,
    SearchReducer
});
export default RootReducer
