import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
    reducer:{ // *** Bug *** syntax error
        user: userReducer,
    }
});

export default store;