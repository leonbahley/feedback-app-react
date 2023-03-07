import { createSlice } from "@reduxjs/toolkit";

const suggestionsSortBySlice = createSlice({
  name: "sort-by",
  initialState: "most-upvotes",
  reducers: {
    setSortBy(state, action) {
      return (state = action.payload);
    },
  },
});

const suggestionsFilterSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setSortBy } = suggestionsSortBySlice.actions;
export const SortBySliceReducer = suggestionsSortBySlice.reducer;
export const { setFilter } = suggestionsFilterSlice.actions;
export const suggestionsFilterReducer = suggestionsFilterSlice.reducer;
