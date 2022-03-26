import { combineReducers } from 'redux-immutable';
import toggleLeaderBoard from './toggleLeaderBoard';

const popupReducer = combineReducers({
  toggleLeaderBoard,
});

export default popupReducer;
