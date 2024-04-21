import { createSlice } from '@reduxjs/toolkit';

const favoritesInitialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    addFavorite: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteFavorite: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload._id);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
