import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { UserInfoCardProps } from './types';
import { db, firebaseDB } from '../../../Utils/firebaseConfig';
import { UserFromFirebaseDb } from '../../../Shared/user';
import { DefaultUser } from '../../../Shared/Constants';

function UserInfoCard({ userId, timeAgo }: Readonly<UserInfoCardProps>) {
  // state use
  const [userData, setUserData] = useState<{
    userPhoto: string;
    userName: string;
  }>();

  // effect use
  useEffect(() => {
    const userDoc = doc(db, firebaseDB.collections.users, userId);

    const unsubscribe = onSnapshot(userDoc, (snapshot) => {
      const userDataFromFirebase = snapshot.data() as UserFromFirebaseDb;
      if (userDataFromFirebase) {
        setUserData({
          userPhoto: userDataFromFirebase.photo,
          userName: `${userDataFromFirebase.firstName}  ${userDataFromFirebase.lastName}`,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [userId]);

  if (!userData) {
    return null;
  }
  return (
    <div className="flex w-full items-center my-4 mx-1">
      <img
        src={userData.userPhoto === '' ? DefaultUser : userData.userPhoto}
        className="size-14 rounded-full object-cover"
        alt="user "
      />
      <div className="mx-4">
        <p>{userData.userName}</p>
        <p className="text-customGray300 font-semibold text-xs">{timeAgo}</p>
      </div>
    </div>
  );
}

export default UserInfoCard;
