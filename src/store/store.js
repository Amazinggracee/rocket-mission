import { configureStore } from '@reduxjs/toolkit';
import { rocketSlice } from '../features/Rockets/rocketSlice';

export default configureStore({
  reducer: {
    rockets: rocketSlice.reducer,
  },
});
