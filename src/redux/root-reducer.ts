import {combineReducers} from 'redux';
import {favoriteReducer} from './manage-favorites/favorite.reducer';

const rootReducer = combineReducers({
  favoriteReducer: favoriteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
