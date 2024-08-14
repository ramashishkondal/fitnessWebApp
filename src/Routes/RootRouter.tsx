import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useRoutes } from 'react-router-dom';
import DocumentTitle from './DocumentTitle';
import { authenticatedRoutes, guestRoutes } from './config';
import AppLayout from '../Components/Layouts/AppLayout';
import type { RootState } from '../Store';
import { auth } from '../Utils/firebaseConfig';
import { resetUserData, updateUserData } from '../Store/User';

function RootRouter() {
  // routes use
  const guest = useRoutes(guestRoutes);
  const authenticated = useRoutes(authenticatedRoutes);

  // redux use
  const { id } = useSelector((state: RootState) => state.user);
  const isAuthenticated = !!id;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(updateUserData({ id: user.uid }));
      } else {
        dispatch(resetUserData()); // Handle the user sign-out case
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [dispatch]);

  return (
    <>
      <DocumentTitle isAuthenticated={isAuthenticated} />
      <AppLayout isAuthenticated={isAuthenticated}>
        {id ? authenticated : guest}
      </AppLayout>
    </>
  );
}

export default RootRouter;
