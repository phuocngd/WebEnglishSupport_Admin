import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosGet, axiosPost } from '../../axios/axios'

const listUsersRequest = createAsyncThunk('account/listUsers', async model => {
  const respone = await axiosGet(model);
  return respone.data;
})

const getUsersSlide = createSlice({
  name: 'listUsers',
  initialState: {
    listUsers: []
  },
  reducers: {
    getListUsers: (state, action) => {
      state.listUsers = action.payload
    }
  },
  extraReducers: {
    [listUsersRequest.pending]: (state, action) => {
      console.log('pending')
    },
    [listUsersRequest.fulfilled]: (state, action) => {
      const data = action.payload

      state.loginState = {
        token: data[0],
        listUsers: data[1],
        rule: data[2]
      }
      console.log('fulfilled')
    },
    [listUsersRequest.rejected]: (state, action) => {
      console.log('rejected')
    }
  }
})
