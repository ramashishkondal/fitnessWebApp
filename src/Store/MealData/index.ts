import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Meal = {
  name: string;
  carbs: number;
  fat: number;
  protein: number;
  calories: number;
  serving_size_g: number;
  id: string;
};
export type DailyMeals = {
  snack: Array<Meal>;
  breakfast: Array<Meal>;
  lunch: Array<Meal>;
  dinner: Array<Meal>;
};
export type Meals = {
  snack: Meal;
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
};

const initialState: DailyMeals = {
  snack: [],
  breakfast: [],
  lunch: [],
  dinner: [],
};

export const currentUserSlice = createSlice({
  name: 'dailyMeals',
  initialState,
  reducers: {
    updateAllMealData: (state, action: PayloadAction<DailyMeals>) => {
      state.snack.push(...action.payload.snack);
      state.breakfast.push(...action.payload.breakfast);
      state.lunch.push(...action.payload.lunch);
      state.dinner.push(...action.payload.dinner);
    },
    resetMealData: () => {
      return initialState;
    },
    resetMealDataItemsTo: (
      state,
      action: PayloadAction<Partial<DailyMeals>>
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

const { actions, reducer } = currentUserSlice;
export const { resetMealData, updateAllMealData, resetMealDataItemsTo } =
  actions;

export default reducer;
