import { Timestamp, doc, setDoc, updateDoc } from 'firebase/firestore';
import { HealthData, User } from '../Shared/user';
import { db, firebaseDB } from './firebaseConfig';
import { DailyMeals } from '../Store/MealData';

export const createUser = async (userId: string, user: User) => {
  try {
    const userDoc = doc(db, firebaseDB.collections.users, userId);

    await setDoc(userDoc, {
      ...user,
      createdOn: Timestamp.fromDate(new Date()), // Storing date as a string
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const updateWaterIntake = async (
  userId: string,
  waterIntake: HealthData['waterIntake'],
  goal: HealthData['goal']
) => {
  const updateAt = new Date().setHours(0, 0, 0, 0).toString();
  const healthDoc = doc(db, firebaseDB.collections.healthData, userId);
  try {
    await updateDoc(healthDoc, {
      [`${updateAt}.waterIntake`]: waterIntake,
      [`${updateAt}.goal`]: goal,
      [`${updateAt}.currentDate`]: new Date().toISOString(),
    });
  } catch (error) {
    console.log('error in updating water intake', error);
  }
};
export const storeMealData = async (userId: string, dailyMeals: DailyMeals) => {
  const updateAt = new Date().setHours(0, 0, 0, 0).toString();
  const dailyMealsDoc = doc(db, firebaseDB.collections.dailyMeals, userId);
  try {
    await setDoc(dailyMealsDoc, {
      [updateAt]: dailyMeals,
    });
  } catch (error) {
    console.log('error encountered while storing dailyMeals data ', error);
  }
};
