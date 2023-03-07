import { configureStore } from "@reduxjs/toolkit";
import {
  SortBySliceReducer,
  suggestionsFilterReducer,
} from "./filterSuggestions/filter_suggestions_slice";

import { suggestionsReducer } from "./suggestions/suggestions_slice";

export const store = configureStore({
  reducer: {
    suggestions: suggestionsReducer,
    sort_by: SortBySliceReducer,
    filter: suggestionsFilterReducer,
  },
});
