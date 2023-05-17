import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  loading: false,
  error: '',
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', () => axios.get('https://api.spacexdata.com/v3/rockets')
  .then((response) => response.data.map((rocket) => (
    {
      rocket_id: rocket.rocket_id,
      rocket_img: rocket.flickr_images[0],
      rocket_name: rocket.rocket_name,
      rocket_description: rocket.rocket_description,
      reserved: false,
    }
  ))));

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserve: (state, action) => state.rockets.map((elem) => {
      if (elem.rocket_id === action.payload) {
        return { ...elem, reserved: !elem.reserved };
      }
      return elem;
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(fetchRockets.fulfilled, (state, action) => ({
      ...state, loading: true, rockets: action.payload, error: '',
    }));
  },
});

export const { reserve } = rocketSlice.actions;
export default rocketSlice.reducer;
