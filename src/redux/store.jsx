import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../redux/reducer';

const store = configureStore({
  reducer: {
    todos: reducer,
  },
});

export default store;
