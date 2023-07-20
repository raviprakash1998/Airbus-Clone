import { configureStore } from "@reduxjs/toolkit";
import SearchedData from "./SearchedData";

export const store = configureStore({
  reducer: {
    search: SearchedData,
  },
});
