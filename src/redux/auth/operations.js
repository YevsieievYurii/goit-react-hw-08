import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}users/signup`, userData);
      const { token } = response.data;
      setAuthHeader(token);
      localStorage.setItem("token", token); // ✅ сохраняем токен
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}users/login`, userData);
      const { token } = response.data;
      setAuthHeader(token);
      localStorage.setItem("token", token); // ✅ сохраняем токен
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post(`${API_URL}users/logout`);
    clearAuthHeader();
    localStorage.removeItem("token");
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    let token = state.auth.token;

    if (!token) {
      token = localStorage.getItem("token");
      if (token) {
        setAuthHeader(token);
      } else {
        return thunkAPI.rejectWithValue("No token found");
      }
    } else {
      setAuthHeader(token);
    }

    try {
      const response = await axios.get(`${API_URL}users/current`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
