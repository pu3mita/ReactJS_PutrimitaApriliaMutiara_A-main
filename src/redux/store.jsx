import { configureStore } from "@reduxjs/toolkit";
import counterWithoutToolkitReducer from "./features/slices/counterWithoutToolkitSlice";
import counterWithToolkitReducer from './features/slices/counterWithToolkitSlice'
import usersWithAsyncThunkReducer from './features/slices/usersWithAsyncThunkSlice'

const store = configureStore({
  reducer: {
    counterReducer: counterWithoutToolkitReducer,
    counterToolkitReducer: counterWithToolkitReducer,
    usersReducer: usersWithAsyncThunkReducer,

  }
})

export default store