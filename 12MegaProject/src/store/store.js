import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";  // yahi hai tera authSlice ka reducer

const store = configureStore({
  reducer: {
    auth: authReducer,  
  },
});

export default store;
