import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../Shared/user';

const initialState: User & { password: string | null } = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  finger: false,
  gender: null,
  interests: [],
  photo: '',
  preferences: [],
  password: null,
  healthData: [],
  notifications: [],
  storiesWatched: [],
  createdOn: '',
};

export const currentUserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    updateUserData: (
      state,
      action: PayloadAction<Partial<User & { password: string | null }>>
    ) => {
      return { ...state, ...action.payload };
    },
    resetUserData: () => {
      return {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        finger: false,
        gender: null,
        interests: [],
        photo: '',
        preferences: [],
        password: null,
        healthData: [],
        notifications: [],
        storiesWatched: [],
        createdOn: '',
      };
    },
  },
});

const { actions, reducer } = currentUserSlice;
export const { updateUserData, resetUserData } = actions;

export default reducer;
