import {  configureStore,combineReducers } from '@reduxjs/toolkit';

import userReducer from "./userSlice"
import postReducer from "./postSlice.js"
import chatReducer from "./chatSlice.js"
import {

  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers( {
  user:userReducer,
  post:postReducer,
  chat:chatReducer
  })
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})