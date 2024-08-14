import { Meal } from '../Store/MealData';

export const extractAlphabets = (str: string) => {
  // Use a regular expression to match all alphabetic characters
  const alphabetOnly = str.match(/[a-zA-Z]/g);

  // Join the matched characters into a single string
  return alphabetOnly ? alphabetOnly.join('') : '';
};

export const getTimePassed = (timeInMillis: number): string => {
  const currentTime = new Date().getTime();
  const timePassedInSecs = (currentTime - timeInMillis) / 1000;
  const timePassedInMns = Math.ceil(timePassedInSecs / 60);
  const timePassedInHrs = Math.floor(timePassedInMns / 60);
  if (timePassedInSecs <= 60) {
    return `${
      Math.floor(timePassedInSecs) > 0 ? Math.floor(timePassedInSecs) : 0
    } ${Math.floor(timePassedInSecs) > 1 ? 'seconds' : 'second'} ago`;
  }
  if (timePassedInMns <= 60) {
    return `${timePassedInMns} ${
      Math.floor(timePassedInMns) > 1 ? 'minutes' : 'minute'
    } ago`;
  }
  if (timePassedInHrs <= 23) {
    return `${timePassedInHrs} ${
      Math.floor(timePassedInHrs) > 1 ? 'hours' : 'hour'
    } ago`;
  }
  return `${Math.floor(timePassedInHrs / 24)} ${
    Math.floor(timePassedInHrs / 24) > 1 ? 'days' : 'day'
  } ago`;
};

export const getCaloriesOfFood = (food: Meal) =>
  food.protein * 4 + food.carbs * 4 + food.fat * 9 > food.calories
    ? food.protein * 4 + food.carbs * 4 + food.fat * 9
    : food.calories;
