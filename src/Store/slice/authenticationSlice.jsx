import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGet } from '../../axios/axios';
import CryptoJS from "crypto-js";
const fetchServer = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await axiosGet(userId);
    return response.data;
  }
);
const decrypt = localstoreKey => {
  const keyMD5 = CryptoJS.MD5(localstoreKey)
  const value = localStorage.getItem(keyMD5) || '';
  const bytes = CryptoJS.AES.decrypt(value, 'SecretPassphrase') // SecretPassphrase can handle by server
  return bytes.toString(CryptoJS.enc.Utf8)
}
const getStateLogin = () => {
  const username = decrypt('loginUserState');
  if (username) {
    return true;
  }
  return false;
}
const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    isLogin: getStateLogin()
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = action.payload;
    }
  },
  extraReducers: {
    [fetchServer.pending]: (state, action) => {
      console.log('pending');
    },
    [fetchServer.fulfilled]: (state, action) => {
      console.log('fulfilled');
    },
    [fetchServer.rejected]: (state, action) => {
      console.log('rejected');
    }
  }
});
const { reducer, actions } = authenticationSlice;
const { login } = actions;
export { login, fetchServer }
// Export the reducer, either as a default or named export
export default reducer;
