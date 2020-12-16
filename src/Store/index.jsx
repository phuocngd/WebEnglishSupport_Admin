import { combineReducers } from 'redux';
import sidebarSlice from './slice/sidebarSlice';
import profileSlide from './slice/profileSlide';
import authenticationSlice from './slice/authenticationSlice';
import examSlide from './slice/examSlide';
export default combineReducers({
  sidebarShow: sidebarSlice,
  authentication: authenticationSlice,
  profile: profileSlide,
  exam: examSlide
});
