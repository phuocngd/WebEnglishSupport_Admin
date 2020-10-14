import { combineReducers } from 'redux'
import sidebarReducer from './sidebarSlice'

export default combineReducers({
  sidebarShow: sidebarReducer
})
