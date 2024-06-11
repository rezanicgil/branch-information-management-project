import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import registerReducer from './registerSlice';
import userReducer from './userSlice';
import branchReducer from './branchSlice';
import getOneBranchReducer from './getOneBranchSlice'
import createOneBranchReducer from './createBranchSlice'


const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    user: userReducer,
    branch: branchReducer,
    getOneBranch: getOneBranchReducer,
    createOneBranch: createOneBranchReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
