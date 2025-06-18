import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";  // yahi hai tera authSlice ka reducer

const store = configureStore({
  reducer: {
    auth: authSlice,  
  },
});

export default store;
