import { combineReducers } from 'redux';
import movieReducer from './movieReducer.js';
import postMovieModalReducer from './postMovieModalReducer.js';
import drawerReducer from './drawerReducer.js';
import yPosReducer from './yPosReducer.js';

export default combineReducers({
 movieReducer,
 postMovieModalReducer,
 drawerReducer,
 yPosReducer
});
