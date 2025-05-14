import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterValue: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.filterValue = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const selectNameFilter = (state) => state.filter.filterValue;

export default filterSlice.reducer;
