import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66211e8f3bf790e070b1e707.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios('/campers');
      return response.data;
    } catch (error) {
      toast.error(`Sorry, error is occurred`, {
        position: 'top-right',
        theme: 'colored',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
