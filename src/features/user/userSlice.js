import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './userAPI';

const initialState = {
    entities: []
};

export const fetchUsersByPage = createAsyncThunk(
  'user/fetchUsers',
  async (page) => {
    const response = await fetchUsers(page);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersByPage.fulfilled, (state, action) => {
        state.entities = action.payload;
      });
  },
});

export const getUsers = (state) => state.user.entities;

export default userSlice.reducer;
