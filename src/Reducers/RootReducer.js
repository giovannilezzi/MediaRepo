import { combineReducers } from 'redux';
import MediaRepoReducer from './MediaRepoReducer'
import ImagesReducer from './ImagesReducer'


const RootReducer = combineReducers({
    MediaRepoReducer,
    ImagesReducer
});
export default RootReducer
