import { createStore } from 'redux'
//phd custom này thành rd-tk
const initialState = {
  sidebarShow: false
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
