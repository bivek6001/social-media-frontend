import {  configureStore } from '@reduxjs/toolkit';

import userReducer from "./userSlice"
import postReducer from "./postSlice.js"
import chatReducer from "./chatSlice.js"


export const store =  configureStore({
  reducer:
  {
  user:userReducer,
  post:postReducer,
  chat:chatReducer
  }
})