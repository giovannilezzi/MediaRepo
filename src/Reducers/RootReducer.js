import { combineReducers } from 'redux';
import MediaRepoReducer from './MediaRepoReducer'
import ImagesReducer from './ImagesReducer'
import FileReducer from './FileReducer'

const RootReducer = combineReducers({
    MediaRepoReducer,
    ImagesReducer,
    FileReducer
});
export default RootReducer
