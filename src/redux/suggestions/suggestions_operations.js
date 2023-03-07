import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://feedback-app-gl6v.onrender.com";

export const fetchSuggestions = createAsyncThunk(
  "suggestions/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/suggestions");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addSuggestion = createAsyncThunk(
  "suggestions/addSuggestion",
  async ({ title, category, detail }, thunkAPI) => {
    try {
      const response = await axios.post("/api/suggestions", {
        title,
        category,
        detail,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteSuggestion = createAsyncThunk(
  "suggestions/deleteSuggestion",
  async (suggestionId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/suggestions/${suggestionId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editSuggestion = createAsyncThunk(
  "suggestions/editSuggestion",
  async ({ title, category, detail, status, suggestionId }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/suggestions/${suggestionId}`, {
        title,
        category,
        detail,
        status,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchSuggestionItem = createAsyncThunk(
  "suggestions/fetchAById",
  async (suggestionId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/suggestions/${suggestionId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const upvote = createAsyncThunk(
  "suggestions/upvote",
  async (id, thunkAPI) => {
    try {
      await axios.patch("/api/suggestions/upvote", {
        id,
      });
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const comment = createAsyncThunk(
  "suggestions/comment",
  async ({ comment, id, commentId }, thunkAPI) => {
    try {
      await axios.patch("/api/suggestions/createParentComment", {
        comment,
        id,
        commentId,
      });
      return { comment, commentId };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const replyComment = createAsyncThunk(
  "suggestions/replyComment",
  async ({ comment, id, parentCommentId }, thunkAPI) => {
    try {
      await axios.patch("/api/suggestions/createCommentReply", {
        comment,
        id,
        parentCommentId,
      });
      return { comment, parentCommentId };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
