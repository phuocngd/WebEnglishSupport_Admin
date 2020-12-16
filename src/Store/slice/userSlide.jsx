import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGet, axiosPost } from '../../axios/axios';
import {decrypt} from '../../share/decrypt'
const getAccountsRequest = createAsyncThunk('/listUser', async model => {
  const respone = await axiosGet(model);
  return respone.data;
});


const getUsersSlide = createSlice({
  name: 'accounts',
  initialState: {
    token: localStorage.getItem('token'),
    accounts: [],
    loading: false,
    error: {}
  },
  reducers: {
    getUsers: (state, action) => {
      state.accounts = action.payload;
    }
  },
  extraReducers: {
    [getAccountsRequest.pending]: (state, action) => {
      console.log('pending');
    },
    [getAccountsRequest.fulfilled]: (state, action) => {
      state.accounts = action.payload;
      console.log('fulfilled');
    },
    [getAccountsRequest.rejected]: (state, action) => {
      console.log('rejected');
    }
  }
});
