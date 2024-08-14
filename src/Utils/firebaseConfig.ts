// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAIPFyNy89ZSWsyd-V9Yz3d_EffmKx-nxc',
  authDomain: 'fitnessapp-44851.firebaseapp.com',
  projectId: 'fitnessapp-44851',
  storageBucket: 'fitnessapp-44851.appspot.com',
  messagingSenderId: '330526479136',
  appId: '1:330526479136:web:9610a22e2b2c3499067d45',
  measurementId: 'G-XZ8R630KTJ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app, 'gs://fitnessapp-44851.appspot.com');

export const firebaseDB = {
  collections: {
    users: 'users',
    posts: 'posts',
    stories: 'stories',
    dailyMeals: 'dailyMeals',
    healthData: 'healthData',
  },
  documents: {
    users: {},
    posts: {
      allIds: 'allIds',
    },
    stories: {},
  },
};
