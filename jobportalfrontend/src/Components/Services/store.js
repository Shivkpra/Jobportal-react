import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import Reducer from "./redux/Reducers"
export const store = configureStore({
  reducer: {
    jobportal:Reducer
  },
}, applyMiddleware(thunk))