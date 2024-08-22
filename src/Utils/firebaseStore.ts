import {
  Timestamp,
  arrayUnion,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import {
  Comment,
  HealthData,
  NotificationData,
  NotificationDataFirebaseDB,
  Post,
  User,
  UserFromFirebaseDb,
} from '../Shared/user';
import { db, firebaseDB, storage } from './firebaseConfig';
import { DailyMeals } from '../Store/MealData';

// fetching
export const getUser = async (userId: string) => {
  const userDoc = doc(db, firebaseDB.collections.users, userId);
  const userData = await getDoc(userDoc);
  if (userData.exists()) {
    if (userData.data()) return userData.data() as UserFromFirebaseDb;
  }
  throw Error('can get user data');
};

// storing
export const createUser = async (userId: string, user: User) => {
  try {
    const userDoc = doc(db, firebaseDB.collections.users, userId);

    await setDoc(userDoc, {
      ...user,
      createdOn: Timestamp.fromDate(new Date()), // Storing date as a string
    });
  } catch (e) {
    // console.error('Error adding document: ', e);
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
    // console.log('error encountered while storing dailyMeals data ', error);
  }
};
export const storePost = async (post: Post) => {
  try {
    const newPostId = post.postId ?? uuidv4();
    const reference = ref(storage, `media/profilePictures/${newPostId}/photo`);
    await uploadString(reference, post.photo, 'data_url');
    const url = await getDownloadURL(reference);

    const postsDoc = doc(db, firebaseDB.collections.posts, newPostId);

    await setDoc(postsDoc, {
      ...post,
      postId: newPostId,
      photo: url,
    });
  } catch (error) {
    // console.log('error encountered while uploading post', error);
  }
};
// export const storeStory = async (
//   story: {
//     storyUrl: string;
//     storyType: string;
//     userName: string;
//     userPhoto: string;
//   },
//   userId: string
// ) => {
//   try {
//     const storyId = uuidv4();
//     const reference = storage().ref(
//       'media/' + 'stories/' + userId + '/' + storyId
//     );
//     await reference.putFile(story.storyUrl);
//     const url = await reference.getDownloadURL();

//     const val = await firestore()
//       .collection(firebaseDB.collections.stories)
//       .doc(userId)
//       .get();
//     const userStoryData = val.data() as StoryData;

//     if (userStoryData) {
//       await firestore()
//         .collection(firebaseDB.collections.stories)
//         .doc(userId)
//         .set({
//           stories: userStoryData.stories.concat({
//             storyType: story.storyType,
//             storyUrl: url,
//             storyCreatedOn: new Date().toISOString(),
//           }),
//           userName: story.userName,
//           userPhoto: story.userPhoto,
//           storyByUserId: userId,
//           latestStoryOn: Timestamp.fromDate(new Date()),
//         });
//     } else {
//       await firestore()
//         .collection(firebaseDB.collections.stories)
//         .doc(userId)
//         .set({
//           stories: [
//             {
//               storyType: story.storyType,
//               storyUrl: url,
//               storyCreatedOn: new Date().toISOString(),
//             },
//           ],
//           userName: story.userName,
//           userPhoto: story.userPhoto,
//           storyByUserId: userId,
//           latestStoryOn: Timestamp.fromDate(new Date()),
//         });
//     }
//   } catch (e) {
//     console.log('error posting story', e);
//   }
// };

// updating

export const updateUserInfo = async (
  userId: string,
  userData: Partial<User>
) => {
  try {
    const userDoc = doc(db, firebaseDB.collections.users, userId);
    await updateDoc(userDoc, userData);
  } catch (error) {
    // console.log('error encountered in updating user data');
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
    // console.log('error in updating water intake', error);
  }
};

export const sendNotification = async (
  notification: Omit<NotificationData, 'createdOn'>,
  sendToUserId: string
) => {
  try {
    const notificationToSend: NotificationDataFirebaseDB = {
      ...notification,
      createdOn: Timestamp.fromDate(new Date()),
    };

    const userDoc = doc(db, firebaseDB.collections.users, sendToUserId);
    await updateDoc(userDoc, {
      notifications: arrayUnion(notificationToSend),
    });
  } catch (e) {
    // console.log('error with sending notifications ', e);
  }
};

export const storePostComment = async (
  postId: string,
  comment: Comment,
  notification?: { sendNotificationToUserId: string }
) => {
  const postsDoc = doc(db, firebaseDB.collections.posts, postId);

  updateDoc(postsDoc, {
    comments: arrayUnion(comment),
  });
  if (notification) {
    sendNotification(
      {
        isShownViaPushNotification: false,
        isUnread: true,
        message: `left a comment on your post "${comment.comment}" !`,
        userId: comment.userId,
      },
      notification.sendNotificationToUserId
    );
  }
};

export const updateLikes = async (
  userId: string,
  postId: string,
  likedByUsersId: Array<string>,
  notification?: {
    sendNotificationToUserId: string;
    userName: string;
    userPhoto: string;
  }
) => {
  const postsDoc = doc(db, firebaseDB.collections.posts, postId);
  try {
    await updateDoc(postsDoc, {
      likedByUsersId,
    });
  } catch (error) {
    // console.log('error updating likes', error);
  }

  // if the user likes own post don't send notification
  if (notification && userId !== notification.sendNotificationToUserId) {
    sendNotification(
      {
        message: 'liked your post.',
        userId,
        isUnread: true,
        isShownViaPushNotification: false,
      },
      notification.sendNotificationToUserId
    );
  }
};

// delete
export const deletePost = async (postId: string) => {
  try {
    const postDoc = doc(db, firebaseDB.collections.posts, postId);
    await deleteDoc(postDoc);
  } catch (error) {
    // console.log('error with deleting post', error);
  }
};
