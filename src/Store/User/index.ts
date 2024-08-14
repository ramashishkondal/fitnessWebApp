import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../Shared/user';
import {
  Fashion,
  Plant,
  HeartBeating,
  RunningMan,
  NoSmoking,
  SleepingMan,
  Vegan,
} from '../../Shared/Constants';

const initialState: User & { password: string | null } = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  finger: false,
  gender: null,
  interests: [
    {
      title: 'Fashion',
      icon: Fashion,
      selected: false,
    },
    {
      title: 'Organic',
      icon: Plant,
      selected: false,
    },
    {
      title: 'Meditation',
      icon: HeartBeating,
      selected: false,
    },
    {
      title: 'Fitness',
      icon: RunningMan,
      selected: false,
    },
    {
      title: 'Smoke Free',
      icon: NoSmoking,
      selected: false,
    },
    {
      title: 'Sleep',
      icon: SleepingMan,
      selected: false,
    },
    {
      title: 'Health',
      icon: HeartBeating,
      selected: false,
    },
    {
      title: 'Running',
      icon: RunningMan,
      selected: false,
    },
    {
      title: 'Vegan',
      icon: Vegan,
      selected: false,
    },
  ],
  photo: '',
  preferences: [
    { title: 'Weight Loss', selected: false },
    { title: 'Better sleeping habit', selected: false },
    { title: 'Track my nutrition', selected: false },
    { title: 'Improve overall fitness', selected: false },
  ],
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
      return initialState;
    },
  },
});

const { actions, reducer } = currentUserSlice;
export const { updateUserData, resetUserData } = actions;

export default reducer;
