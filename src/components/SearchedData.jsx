import { createSlice } from "@reduxjs/toolkit";

const initialState = { from: "", to: "", price: 0, isUserLogin: false };

const SearchedData = createSlice({
  name: "search",
  initialState,
  reducers: {
    fromToSetInRedux: (state, action) => {
      state.from = action.payload.from;
      state.to = action.payload.to;
    },
    flightPrice: (state, action) => {
      state.price = action.payload;
    },
    UserLogin: (state, action) => {
      state.isUserLogin = action.payload;
    },
  },
});

export const { fromToSetInRedux, flightPrice, UserLogin } =
  SearchedData.actions;
export default SearchedData.reducer;
