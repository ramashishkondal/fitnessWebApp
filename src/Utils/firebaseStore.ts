import { Timestamp, doc, setDoc } from 'firebase/firestore';
import { User } from '../Shared/user';
import { db, firebaseDB } from './firebaseConfig';

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
export const storePost = () => {};
