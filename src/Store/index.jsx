import { combineReducers } from 'redux'
import sidebarReducer from './slice/sidebarSlice'
import authenticationReducer from './slice/authenticationSlice'

export default combineReducers({
  sidebarShow: sidebarReducer,
  authentication: authenticationReducer
})
