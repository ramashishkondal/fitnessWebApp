import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import DocumentTitle from './DocumentTitle';
import { authenticatedRoutes, guestRoutes } from './config';
import AppLayout from '../Components/Layouts/AppLayout';
import type { RootState } from '../Store';

function RootRouter() {
  const guest = useRoutes(guestRoutes);
  const authenticated = useRoutes(authenticatedRoutes);
  const { id } = useSelector((state: RootState) => state.user);
  const isAuthenticated = !!id;
  console.log('====================================');
  console.log('id in this i s', id);
  console.log('====================================');
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
