import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type HealthData = {
  nutrition: number;
  todaysSteps: number;
  waterIntake: number;
  hasPermission: boolean;
  goal: {
    totalCalorie: number;
    noOfGlasses: number;
    totalSteps: number;
    goalAchievedModalShown: boolean;
  };
  glassesLength: number;
  currentDate: string;
};

const initialState: HealthData = {
  nutrition: 0,
  todaysSteps: 0,
  waterIntake: 0,
  hasPermission: false,

  goal: {
    totalCalorie: 2500,
    noOfGlasses: 6,
    totalSteps: 500,
    goalAchievedModalShown: false,
  },
  currentDate: new Date().toISOString(),
  glassesLength: 6,
};

export const healthSlice = createSlice({
  name: 'healthSlice',
  initialState,
  reducers: {
    updateHealthData: (state, action: PayloadAction<Partial<HealthData>>) => {
      return {
        ...state,
        currentDate: new Date().toISOString(),
        ...action.payload,
      };
    },
    resetHealthData: () => {
      return initialState;
    },
    setModalShown: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        goal: {
          ...state.goal,
          goalAchievedModalShownL: action.payload,
        },
      };
    },
  },
});

const { reducer, actions } = healthSlice;
export const { updateHealthData, resetHealthData, setModalShown } = actions;

export default reducer;
