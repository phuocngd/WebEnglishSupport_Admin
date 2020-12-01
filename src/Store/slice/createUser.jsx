import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGet, axiosPost } from '../../axios/axios';
import CryptoJS from "crypto-js";

const userSlide = createSlice({
    name:'user',
    initialState:0,
    reducers:{
        create:(state, action)=>{
            
        },
        update:(state,action)=>{

        }

    }
})


const counterSlice = RTK.createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
      increment: state => state + 1,
      decrement: state => state - 1
    }
  });

  const { increment, decrement } = counterSlice.actions;

  const store = RTK.configureStore({ reducer: counterSlice.reducer });
  const valueEl = document.getElementById("value");

  function render() {
    valueEl.innerHTML = store.getState().toString();
  }

  render();
  store.subscribe(render);

  document
    .getElementById("increment")
    .addEventListener("click", function() {
      store.dispatch(increment());
    });
