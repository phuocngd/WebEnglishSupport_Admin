import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGet, axiosPost } from '../../axios/axios';
import {decrypt} from '../../share/decrypt'
const signinRequest = createAsyncThunk('account/signin', async model => {
  const response = await axiosPost(model);
  return response.data;
});
const signupRequest = createAsyncThunk('account/signup', async model => {
  const response = await axiosPost(model);
  return response.data;
});

const getStateLogin = () => {
  const username = decrypt('loginUserState');
  if (username) {
    return true;
  }
  return false;
};
const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    loginState: null,
    isloggedIn: false
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = action.payload;
    },
    logout: state => {
      state.loginState = {};
    },
    updateStateLogin: (state, action) => {
      const data = action.payload;
      state.loginState = {
        token: data[0],
        email: data[1],
        rule: data[2]
      };
    }
  },
  extraReducers: {
    [signinRequest.pending]: (state, action) => {
      console.log('pending');
    },
    [signinRequest.fulfilled]: (state, action) => {
      const data = action.payload;

      state.loginState = {
        token: data[0],
        email: data[1],
        rule: data[2]
      };
      state.isloggedIn = true;
      console.log('fulfilled');
    },
    [signinRequest.rejected]: (state, action) => {
      console.log('rejected');
      state.isloggedIn = false;
      state.messageLog = 'logfail';
    },

    [signupRequest.pending]: (state, action) => {
      console.log('pending');
    },
    [signupRequest.fulfilled]: (state, action) => {
      const data = action.payload;

      state.loginState = {
        token: data[0],
        email: data[1],
        rule: data[2]
      };
      console.log('fulfilled');
    },
    [signupRequest.rejected]: (state, action) => {
      console.log('rejected');
    }
  }
});
const { reducer, actions } = authenticationSlice;
const { login, logout, updateStateLogin } = actions;
export { login, logout, updateStateLogin, signinRequest, signupRequest };
// Export the reducer, either as a default or named export
export default reducer;
