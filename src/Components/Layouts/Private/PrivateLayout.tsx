import { doc, onSnapshot, Timestamp } from 'firebase/firestore';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserFromFirebaseDb } from '../../../Shared/user';
import { RootState } from '../../../Store';
import { updateUserData } from '../../../Store/User';
import { db, firebaseDB } from '../../../Utils/firebaseConfig';
import { AppLayoutProps } from '../AppLayout.d';
import Drawer from './Drawer/Drawer';

function PrivateLayout({ children }: Readonly<AppLayoutProps>): JSX.Element {
  // redux use
  const { id } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleUserData = () => {
      const userDoc = doc(db, firebaseDB.collections.users, id!);

      const unsubscribe = onSnapshot(userDoc, (snapshot) => {
        const userDataFromFirebase = snapshot.data() as
          | UserFromFirebaseDb
          | undefined;

        if (!userDataFromFirebase) {
          return;
        }

        const parsedUserData = {
          ...userDataFromFirebase,
          createdOn: Timestamp.fromMillis(
            userDataFromFirebase.createdOn.seconds * 1000
          )
            .toDate()
            .toISOString(),
          notifications: userDataFromFirebase.notifications.map((val) => ({
            ...val,
            createdOn: Timestamp.fromMillis(val.createdOn.seconds * 1000)
              .toDate()
              .toISOString(),
          })),
        };

        dispatch(updateUserData(parsedUserData));
      });

      return unsubscribe;
    };

    return handleUserData();
  }, [id, dispatch]);

  return (
    <div className="flex">
      <Drawer />

      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default PrivateLayout;
