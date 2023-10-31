import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./Slice";

export const reduxstore = configureStore({
         reducer:blogReducer
})
