import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSuggestions,
  addSuggestion,
  deleteSuggestion,
  editSuggestion,
  fetchSuggestionItem,
  upvote,
  comment,
  replyComment,
} from "./suggestions_operations.js";

const suggestionsSlice = createSlice({
  name: "suggestions",
  initialState: {
    items: [],
    fetchedItemById: null,
    areLoading: false,
    itemIsLoading: false,
    commentsAreLoading: false,
  },
  extraReducers: {
    [fetchSuggestions.fulfilled](state, action) {
      state.items = action.payload;
      state.areLoading = false;
    },
    [fetchSuggestions.pending](state, action) {
      state.areLoading = true;
    },
    [addSuggestion.fulfilled](state, action) {
      state.items.unshift(action.payload);
      state.areLoading = false;
    },
    [addSuggestion.pending](state, action) {
      state.areLoading = true;
    },
    [deleteSuggestion.fulfilled](state, action) {
      const index = state.items.findIndex(
        (suggestion) => suggestion.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.fetchedItemById.upvote_count += 1;
      state.areLoading = false;
    },
    [deleteSuggestion.pending](state, action) {
      state.areLoading = true;
    },
    [editSuggestion.fulfilled](state, action) {
      const index = state.items.findIndex(
        (suggestion) => suggestion.id === action.payload._id
      );
      state.items[index] = action.payload;
      state.commentsAreLoading = false;
      state.itemIsLoading = false;
    },
    [editSuggestion.pending](state, action) {
      state.commentsAreLoading = true;
      state.itemIsLoading = true;
    },
    [fetchSuggestionItem.fulfilled](state, action) {
      state.fetchedItemById = action.payload;
      state.itemIsLoading = false;
      state.commentsAreLoading = false;
    },
    [fetchSuggestionItem.pending](state, action) {
      state.itemIsLoading = true;
      state.commentsAreLoading = true;
    },
    [upvote.fulfilled](state, action) {
      const index = state.items.findIndex(
        (suggestion) => suggestion._id === action.payload
      );
      if (state.items.length !== 0) {
        state.items[index].upvote_count += 1;
      }
      if (
        state.fetchedItemById &&
        state.fetchedItemById._id === action.payload
      ) {
        state.fetchedItemById.upvote_count += 1;
      }
    },
    [comment.fulfilled](state, action) {
      state.fetchedItemById.comments.push(action.payload);
      state.commentsAreLoading = false;
    },
    [comment.pending](state, action) {
      state.commentsAreLoading = true;
    },
    [replyComment.fulfilled](state, action) {
      state.fetchedItemById.commentsReplies.push(action.payload);
      state.commentsAreLoading = false;
    },
    [replyComment.pending](state, action) {
      state.commentsAreLoading = true;
    },
  },
});

export const suggestionsReducer = suggestionsSlice.reducer;
