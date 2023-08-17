import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  from: "",
  to: "",
  price: 0,
  isUserLogin: false,
  airlineName: "",
};

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
    airlineName: (state, action) => {
      state.airlineName = action.payload;
    },
  },
});

export const { fromToSetInRedux, flightPrice, UserLogin, airlineName } =
  SearchedData.actions;
export default SearchedData.reducer;
