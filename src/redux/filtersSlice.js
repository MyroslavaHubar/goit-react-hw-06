import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: {
    name: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducer: {
    setFilterValue(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilterValue } = filterSlice.actions;
